import { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { TEAMS } from './teams';
import './App.css';

// ── CSV parsing ──────────────────────────────────────────────────────────────
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return {};
  const header = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/[^a-z]/g, ''));
  const nameIdx = header.findIndex(h => ['name','participant','player','person'].includes(h));
  const teamIdx = header.findIndex(h => ['team','country','nation'].includes(h));
  if (nameIdx === -1 || teamIdx === -1) return {};
  const allocations = {};
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
    const name = cols[nameIdx];
    const teamName = cols[teamIdx];
    if (!name || !teamName) continue;
    const team = TEAMS.find(t =>
      t.name.toLowerCase() === teamName.toLowerCase() ||
      t.name.toLowerCase().replace(/[^a-z]/g, '') === teamName.toLowerCase().replace(/[^a-z]/g, '')
    );
    if (team) allocations[name.toLowerCase()] = { name, team };
  }
  return allocations;
}

// ── Detect sibling entries (e.g. "Alfie 1" → finds "Alfie 2") ───────────────
function getSiblings(currentName, allocations) {
  // Strip trailing " N" to get base name (e.g. "Alfie 1" → "alfie")
  const base = currentName.trim().toLowerCase().replace(/\s+\d+$/, '');
  // Only applies if the name actually had a number suffix
  if (base === currentName.trim().toLowerCase()) return [];
  return Object.values(allocations).filter(entry => {
    const entryBase = entry.name.toLowerCase().replace(/\s+\d+$/, '');
    return entryBase === base && entry.name.toLowerCase() !== currentName.trim().toLowerCase();
  });
}

// ── Team reveal card ─────────────────────────────────────────────────────────
function TeamCard({ participantName, team, visible, onNext, siblings, onRevealSibling }) {
  return (
    <div className={`result-card ${visible ? 'card-visible' : ''}`}>
      <div className="card-top">
        <span className="card-winner-label">🎉 {participantName}'s team is…</span>
      </div>
      <div className="card-flag">{team.flag}</div>
      <div className="card-team-name">{team.name}</div>
      <div className="card-group">Group {team.group}</div>
      <div className="card-section">
        <div className="card-section-title">⭐ Star Player</div>
        <div className="card-section-body">{team.starPlayer}</div>
      </div>
      <div className="card-section">
        <div className="card-section-title">📅 Group Stage Fixtures</div>
        <ul className="fixtures-list">
          {team.fixtures.map((f, i) => (
            <li key={i}>
              <span className="fixture-date">{f.date}</span>
              <span className="fixture-opp">vs {f.opponent}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-section card-fact">
        <div className="card-section-title">💡 Did you know?</div>
        <div className="card-section-body fact-text">{team.fact}</div>
      </div>
      <div className="card-next">
        {siblings.map(s => (
          <button
            key={s.name}
            className="sibling-btn"
            onClick={() => onRevealSibling(s)}
          >
            🎩 You also have {s.name} — reveal it!
          </button>
        ))}
        <button className="next-btn" onClick={onNext}>Next person →</button>
      </div>
    </div>
  );
}

// ── Main app ─────────────────────────────────────────────────────────────────
export default function App() {
  const [allocations, setAllocations] = useState(null);
  const [loadError, setLoadError]     = useState('');

  const [nameInput, setNameInput]     = useState('');
  const [phase, setPhase]             = useState('idle'); // 'idle' | 'spinning' | 'revealed'
  const [cyclingTeam, setCyclingTeam] = useState(null);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [showCard, setShowCard]       = useState(false);
  const [notFound, setNotFound]       = useState(false);
  const [revealedNames, setRevealedNames] = useState(new Set());
  const timerRef = useRef(null);

  useEffect(() => {
    fetch('/allocations.csv')
      .then(r => {
        if (!r.ok) throw new Error(`Could not load allocations.csv (${r.status})`);
        return r.text();
      })
      .then(text => setAllocations(parseCSV(text)))
      .catch(err => { setLoadError(err.message); setAllocations({}); });
  }, []);

  const allNames = allocations ? Object.values(allocations).map(e => e.name) : [];

  function runSpin(entry) {
    setPhase('spinning');
    setShowCard(false);
    setCurrentEntry(null);

    const totalSteps = 24;
    let step = 0;

    function tick() {
      step++;
      const pool = step < totalSteps ? TEAMS.filter(t => t.id !== entry.team.id) : TEAMS;
      setCyclingTeam(pool[Math.floor(Math.random() * pool.length)]);

      if (step >= totalSteps) {
        timerRef.current = setTimeout(() => {
          setCyclingTeam(entry.team);
          timerRef.current = setTimeout(() => {
            setPhase('revealed');
            setCurrentEntry(entry);
            setRevealedNames(prev => new Set([...prev, entry.name.toLowerCase()]));
            setShowCard(false);
            setTimeout(() => setShowCard(true), 60);
          }, 600);
        }, 400);
        return;
      }

      const progress = step / totalSteps;
      const delay = 55 + Math.pow(progress, 2.2) * 600;
      timerRef.current = setTimeout(tick, delay);
    }

    tick();
  }

  function startReveal() {
    if (!allocations || !nameInput.trim() || phase !== 'idle') return;
    const key = nameInput.trim().toLowerCase();
    const entry = allocations[key];
    if (!entry) { setNotFound(true); return; }
    setNotFound(false);
    runSpin(entry);
  }

  function handleRevealSibling(siblingEntry) {
    clearTimeout(timerRef.current);
    setNameInput(siblingEntry.name);
    runSpin(siblingEntry);
  }

  function handleKey(e) { if (e.key === 'Enter') startReveal(); }

  function reset() {
    clearTimeout(timerRef.current);
    setPhase('idle');
    setCyclingTeam(null);
    setCurrentEntry(null);
    setShowCard(false);
    setNameInput('');
    setNotFound(false);
    setRevealedNames(new Set());
  }

  // Siblings not yet revealed in this session
  const siblings = currentEntry
    ? getSiblings(currentEntry.name, allocations).filter(
        s => !revealedNames.has(s.name.toLowerCase())
      )
    : [];

  const isLoading = allocations === null;

  return (
    <div className="app">
      <header className="header">
        <div className="trophy">🏆</div>
        <h1>World Cup 2026 Sweepstake</h1>
        <p className="subtitle">USA · Canada · Mexico &nbsp;·&nbsp; 11 Jun – 19 Jul 2026</p>
      </header>

      <main className="main">
        {isLoading && (
          <div className="panel center-text">
            <p className="loading-text">Loading…</p>
          </div>
        )}

        {loadError && (
          <div className="panel">
            <div className="csv-error">⚠️ {loadError}</div>
            <p className="panel-desc" style={{ marginTop: 10 }}>
              Make sure <code>allocations.csv</code> is in the <code>public/</code> folder
              with <code>Name</code> and <code>Team</code> columns.
            </p>
          </div>
        )}

        {!isLoading && !loadError && (
          <div className="panel">

            {/* ── Idle: name entry ── */}
            {phase === 'idle' && (
              <>
                <p className="reveal-prompt">Select your name to draw from the hat 🎩</p>
                <div className="input-row">
                  <input
                    className="name-input"
                    type="text"
                    list="names-list"
                    placeholder="Start typing your name…"
                    value={nameInput}
                    onChange={e => { setNameInput(e.target.value); setNotFound(false); }}
                    onKeyDown={handleKey}
                    maxLength={60}
                    autoFocus
                    autoComplete="off"
                  />
                  <datalist id="names-list">
                    {allNames.map(n => <option key={n} value={n} />)}
                  </datalist>
                  <button
                    className="draw-btn"
                    onClick={startReveal}
                    disabled={!nameInput.trim()}
                  >
                    Draw 🎩
                  </button>
                </div>
                {notFound && (
                  <div className="not-found">
                    😕 <strong>"{nameInput}"</strong> wasn't found in the sweepstake. Please select your name from the list.
                  </div>
                )}
              </>
            )}

            {/* ── Spinning ── */}
            {phase === 'spinning' && cyclingTeam && (
              <div className="spinner-wrap">
                <div className="spinner-hat">🎩</div>
                <div className="spinner-display">
                  <div key={cyclingTeam.id} className="spinner-flag">{cyclingTeam.flag}</div>
                  <div className="spinner-name">{cyclingTeam.name}</div>
                </div>
              </div>
            )}

            {/* ── Revealed ── */}
            {phase === 'revealed' && currentEntry && (
              <TeamCard
                participantName={currentEntry.name}
                team={currentEntry.team}
                visible={showCard}
                onNext={reset}
                siblings={siblings}
                onRevealSibling={handleRevealSibling}
              />
            )}

          </div>
        )}
      </main>

      <footer className="footer">
        <p className="footer-note">All 48 qualified teams · 2026 FIFA World Cup</p>
      </footer>
      <Analytics />
    </div>
  );
}
