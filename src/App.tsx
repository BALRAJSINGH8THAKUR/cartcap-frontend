import { useMemo, useState, useEffect, type ReactNode } from "react";

type IconName =
  | "store"
  | "grid"
  | "briefcase"
  | "wallet"
  | "chart"
  | "settings"
  | "bell"
  | "search"
  | "chevron"
  | "arrow"
  | "clock"
  | "users"
  | "shield"
  | "spark"
  | "menu"
  | "close"
  | "check";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    store: (
      <>
        <path d="M4 10v9h16v-9M3 10l2-6h14l2 6" />
        <path d="M3 10c0 2 3 2 4 0 1 2 4 2 5 0 1 2 4 2 5 0 1 2 4 2 4 0M9 19v-5h6v5" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6h14a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h11" />
        <path d="M15 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2-7 6-7s6 3 6 7M16 5a3 3 0 0 1 0 6M17 14c2.5.7 4 2.8 4 6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </>
    ),
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

const tiers = [
  { name: "Vending stall", value: "₹10K", note: "Minimum capital", icon: "01", color: "#f47845" },
  { name: "Cycle & cart", value: "₹15K", note: "Starting capital", icon: "02", color: "#dc9c3f" },
  { name: "Food truck", value: "₹1.5–3L", note: "Capital range", icon: "03", color: "#5f9171" },
  { name: "Shop", value: "₹15–30L", note: "Capital range", icon: "04", color: "#365f59" },
];

const money = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

function Logo() {
  return (
    <div className="logo">
      <span className="logo-mark">
        <Icon name="store" size={21} />
      </span>
      <span>
        <strong>cartcap</strong>
        <small>STREET BUSINESS, MADE SIMPLE</small>
      </span>
    </div>
  );
}

function CartIllustration() {
  return (
    <div className="cart-illustration" aria-hidden>
      <span className="sun" />
      <span className="cloud cloud-one" />
      <span className="cloud cloud-two" />
      <div className="awning-top" />
      <div className="awning">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="cart-label">YOUR CART</div>
      <div className="cart-body">
        <span className="window" />
        <span className="handle" />
      </div>
      <span className="wheel wheel-one" />
      <span className="wheel wheel-two" />
    </div>
  );
}

const portfolioItems = [
  {
    name: "Bandra Burger Cart",
    type: "Equity partnership",
    invested: 4000,
    earned: 720,
    returnRate: "7.2%",
    progress: 82,
    color: "#f47a46",
  },
  {
    name: "Chai Cycle",
    type: "Fast lending",
    invested: 2500,
    earned: 315,
    returnRate: "6.1%",
    progress: 58,
    color: "#de9b35",
  },
  {
    name: "The Dosa Route",
    type: "Equity partnership",
    invested: 5000,
    earned: 960,
    returnRate: "9.4%",
    progress: 76,
    color: "#5d956e",
  },
  {
    name: "Green Bowl Kitchen",
    type: "Equity partnership",
    invested: 3500,
    earned: 405,
    returnRate: "7.8%",
    progress: 64,
    color: "#587e72",
  },
];

function ViewHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="view-heading">
      <div>
        <span className="eyebrow">
          <i /> {eyebrow}
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

function SummaryCard({
  label,
  value,
  note,
  icon,
  tone = "green",
}: {
  label: string;
  value: string;
  note: string;
  icon: IconName;
  tone?: "green" | "orange" | "gold";
}) {
  return (
    <div className="summary-card">
      <span className={`summary-icon ${tone}`}>
        <Icon name={icon} size={19} />
      </span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
        <em>{note}</em>
      </span>
    </div>
  );
}

function PortfolioView({ onExplore }: { onExplore: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="dashboard-view">
      <ViewHeading
        eyebrow="YOUR PORTFOLIO"
        title="My investments"
        description="Track every business you back, from capital deployed to returns earned."
        action={
          <button className="primary-button" onClick={onExplore}>
            Find a business <Icon name="arrow" size={17} />
          </button>
        }
      />
      <div className="summary-grid">
        <SummaryCard
          label="TOTAL INVESTED"
          value="₹15,000"
          note="Across 4 businesses"
          icon="briefcase"
          tone="orange"
        />
        <SummaryCard label="TOTAL EARNED" value="₹2,400" note="+₹380 this month" icon="chart" />
        <SummaryCard
          label="AVG. MONTHLY RETURN"
          value="7.6%"
          note="Within your target range"
          icon="spark"
          tone="gold"
        />
      </div>

      <div className="dashboard-grid portfolio-layout">
        <div className="panel investment-panel">
          <div className="panel-heading">
            <div>
              <h2>Active investments</h2>
              <p>Performance updated from verified sales.</p>
            </div>
            <span className="panel-count">4 active</span>
          </div>
          <div className="investment-list">
            {portfolioItems.map((item) => (
              <div
                className={`investment-item ${expanded === item.name ? "expanded" : ""}`}
                key={item.name}
              >
                <div className="investment-main">
                  <span
                    className="business-dot"
                    style={{ background: `${item.color}18`, color: item.color }}
                  >
                    <Icon name="store" size={18} />
                  </span>
                  <span className="investment-name">
                    <strong>{item.name}</strong>
                    <small>{item.type}</small>
                  </span>
                  <span>
                    <small>Invested</small>
                    <strong>{money(item.invested)}</strong>
                  </span>
                  <span>
                    <small>Earned</small>
                    <strong className="positive">+{money(item.earned)}</strong>
                  </span>
                  <span>
                    <small>Return</small>
                    <strong>{item.returnRate}</strong>
                  </span>
                  <button
                    className="row-action"
                    onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                    aria-label={`View ${item.name} details`}
                  >
                    <Icon name="chevron" size={17} />
                  </button>
                </div>
                {expanded === item.name && (
                  <div className="investment-detail">
                    <span>
                      <b>Ownership progress</b>
                      <small>{item.progress}% of funding term complete</small>
                    </span>
                    <div className="detail-progress">
                      <i style={{ width: `${item.progress}%`, background: item.color }} />
                    </div>
                    <span>
                      <b>Next payout</b>
                      <small>Friday, 20 November</small>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="panel allocation-panel">
          <div className="panel-heading">
            <div>
              <h2>Allocation</h2>
              <p>By business model</p>
            </div>
          </div>
          <div className="allocation-ring">
            <span>
              <strong>₹15K</strong>
              <small>deployed</small>
            </span>
          </div>
          <div className="allocation-legend">
            <span>
              <i className="orange" />
              <b>Equity partnership</b>
              <small>83%</small>
            </span>
            <span>
              <i className="green" />
              <b>Fast lending</b>
              <small>17%</small>
            </span>
          </div>
          <button className="secondary-button" onClick={onExplore}>
            Diversify portfolio <Icon name="arrow" size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

function EarningsView() {
  const [period, setPeriod] = useState<"Month" | "Quarter" | "Year">("Month");
  const periodData = {
    Month: {
      total: "₹2,400",
      change: "+18.4%",
      bars: [35, 48, 42, 64, 56, 72, 89, 76, 94, 82, 100, 91],
    },
    Quarter: {
      total: "₹6,840",
      change: "+24.1%",
      bars: [26, 38, 31, 52, 62, 55, 71, 69, 82, 88, 91, 100],
    },
    Year: {
      total: "₹21,360",
      change: "+31.7%",
      bars: [18, 24, 34, 31, 45, 52, 60, 68, 71, 81, 92, 100],
    },
  }[period];

  return (
    <section className="dashboard-view">
      <ViewHeading
        eyebrow="RETURN TRACKER"
        title="Earnings"
        description="Follow your revenue share and understand which businesses drive your returns."
      />
      <div className="summary-grid">
        <SummaryCard
          label={`${period.toUpperCase()} EARNINGS`}
          value={periodData.total}
          note={`${periodData.change} from last period`}
          icon="chart"
        />
        <SummaryCard
          label="PENDING PAYOUT"
          value="₹1,180"
          note="Scheduled for Friday"
          icon="clock"
          tone="gold"
        />
        <SummaryCard
          label="ALL-TIME EARNINGS"
          value="₹21,360"
          note="Since your first investment"
          icon="wallet"
          tone="orange"
        />
      </div>

      <div className="dashboard-grid earnings-layout">
        <div className="panel earnings-chart-panel">
          <div className="panel-heading">
            <div>
              <h2>Earnings performance</h2>
              <p>Net investor share after business costs.</p>
            </div>
            <div className="period-switch">
              {(["Month", "Quarter", "Year"] as const).map((item) => (
                <button
                  key={item}
                  className={period === item ? "active" : ""}
                  onClick={() => setPeriod(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="chart-total">
            <strong>{periodData.total}</strong>
            <span>{periodData.change}</span>
          </div>
          <div className="bar-chart">
            {periodData.bars.map((height, index) => (
              <i key={index} style={{ height: `${height}%` }}>
                <span>{money(120 + index * 35)}</span>
              </i>
            ))}
          </div>
          <div className="chart-labels">
            <span>Start</span>
            <span>Mid period</span>
            <span>Now</span>
          </div>
        </div>
        <div className="panel source-panel">
          <div className="panel-heading">
            <div>
              <h2>Top earners</h2>
              <p>This {period.toLowerCase()}</p>
            </div>
          </div>
          {portfolioItems.slice(0, 3).map((item, index) => (
            <div className="source-row" key={item.name}>
              <span className="source-rank">0{index + 1}</span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.returnRate} monthly return</small>
              </span>
              <b>
                +
                {money(
                  Math.round(
                    item.earned / (period === "Month" ? 3 : period === "Quarter" ? 1.4 : 1),
                  ),
                )}
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WalletView() {
  const [schedule, setSchedule] = useState<"Weekly" | "Monthly">("Weekly");
  const [balance, setBalance] = useState(2180);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("1000");
  const [message, setMessage] = useState("");

  const withdraw = () => {
    const requested = Number(withdrawAmount);
    if (!requested || requested < 100 || requested > balance) {
      setMessage(`Enter an amount between ₹100 and ${money(balance)}.`);
      return;
    }
    setBalance(balance - requested);
    setMessage("");
    setWithdrawOpen(false);
  };

  return (
    <section className="dashboard-view">
      <ViewHeading
        eyebrow="PAYOUTS & BALANCE"
        title="Wallet"
        description="Manage available earnings, your payout schedule, and withdrawal history."
        action={
          <button className="primary-button" onClick={() => setWithdrawOpen(true)}>
            Withdraw earnings <Icon name="arrow" size={17} />
          </button>
        }
      />
      <div className="wallet-balance">
        <div>
          <span className="eyebrow">
            <i /> AVAILABLE TO WITHDRAW
          </span>
          <strong>{money(balance)}</strong>
          <p>After the 5% platform withdrawal fee</p>
        </div>
        <span className="wallet-mark">
          <Icon name="wallet" size={35} />
        </span>
      </div>

      <div className="dashboard-grid wallet-layout">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h2>Payout schedule</h2>
              <p>Choose how often available earnings move to your bank.</p>
            </div>
          </div>
          <div className="schedule-options">
            {(["Weekly", "Monthly"] as const).map((item) => (
              <button
                key={item}
                className={schedule === item ? "active" : ""}
                onClick={() => setSchedule(item)}
              >
                <span>
                  <Icon name={item === "Weekly" ? "clock" : "wallet"} />
                  <b>{item}</b>
                  <small>{item === "Weekly" ? "Every Friday" : "Last working day"}</small>
                </span>
                <i>{schedule === item && <Icon name="check" size={14} />}</i>
              </button>
            ))}
          </div>
          <div className="next-payout">
            <span>
              <Icon name="clock" />
            </span>
            <div>
              <small>NEXT AUTOMATIC PAYOUT</small>
              <strong>
                {schedule === "Weekly" ? "Friday, 20 November" : "Monday, 30 November"}
              </strong>
            </div>
            <b>{money(balance)}</b>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h2>Recent activity</h2>
              <p>Your latest wallet transactions.</p>
            </div>
          </div>
          {[
            ["Return credited", "Bandra Burger Cart", "+₹480", "green"],
            ["Bank withdrawal", "HDFC Bank •• 4821", "−₹1,200", ""],
            ["Return credited", "The Dosa Route", "+₹620", "green"],
            ["Platform fee", "5% withdrawal fee", "−₹60", ""],
          ].map(([title, note, value, tone]) => (
            <div className="transaction-row" key={`${title}${note}`}>
              <span className={tone}>
                <Icon name={tone ? "chart" : "wallet"} size={16} />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{note}</small>
              </div>
              <b className={tone}>{value}</b>
            </div>
          ))}
        </div>
      </div>

      {withdrawOpen && (
        <div className="inline-dialog-backdrop" onMouseDown={() => setWithdrawOpen(false)}>
          <div className="withdraw-dialog" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="icon-button modal-close"
              onClick={() => setWithdrawOpen(false)}
              aria-label="Close withdrawal"
            >
              <Icon name="close" />
            </button>
            <span className="modal-icon">
              <Icon name="wallet" />
            </span>
            <h2>Withdraw earnings</h2>
            <p>Funds will be sent to HDFC Bank ending in 4821.</p>
            <label>
              Amount
              <input
                type="number"
                min="100"
                max={balance}
                value={withdrawAmount}
                onChange={(event) => setWithdrawAmount(event.target.value)}
              />
            </label>
            <div className="withdraw-summary">
              <span>Platform fee (5%)</span>
              <b>{money(Number(withdrawAmount || 0) * 0.05)}</b>
            </div>
            <div className="withdraw-summary">
              <span>You receive</span>
              <strong>{money(Number(withdrawAmount || 0) * 0.95)}</strong>
            </div>
            {message && <p className="form-error">{message}</p>}
            <button className="primary-button modal-action" onClick={withdraw}>
              Confirm withdrawal <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function ProfileView() {
  const [name, setName] = useState("Arjun Rao");
  const [email, setEmail] = useState("arjun.rao@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [updates, setUpdates] = useState(true);
  const [payouts, setPayouts] = useState(true);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <section className="dashboard-view">
      <ViewHeading
        eyebrow="ACCOUNT SETTINGS"
        title="Profile"
        description="Keep your personal information, payout account, and notifications up to date."
      />
      <div className="dashboard-grid profile-layout">
        <div className="panel profile-form-panel">
          <div className="profile-intro">
            <span className="large-avatar">AR</span>
            <div>
              <h2>{name}</h2>
              <p>Investor account · Verified</p>
            </div>
            <span className="verified">
              <Icon name="shield" size={15} /> Identity verified
            </span>
          </div>
          <div className="form-grid">
            <label>
              Full name
              <input value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
              Email address
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Phone number
              <input value={phone} onChange={(event) => setPhone(event.target.value)} />
            </label>
            <label>
              Investor ID
              <input value="CC-IN-10482" disabled />
            </label>
          </div>
          <div className="form-actions">
            <span>
              {saved && (
                <>
                  <Icon name="check" size={15} /> Changes saved
                </>
              )}
            </span>
            <button className="primary-button" onClick={save}>
              Save changes
            </button>
          </div>
        </div>
        <div className="settings-column">
          <div className="panel bank-card">
            <div className="panel-heading">
              <div>
                <h2>Payout account</h2>
                <p>Where your withdrawals are sent.</p>
              </div>
            </div>
            <div className="bank-row">
              <span>H</span>
              <div>
                <strong>HDFC Bank</strong>
                <small>Account ending in 4821</small>
              </div>
              <b>Primary</b>
            </div>
            <button
              className="secondary-button"
              onClick={() =>
                alert("Bank account verification is ready for your backend connection.")
              }
            >
              Manage bank account
            </button>
          </div>
          <div className="panel notification-settings">
            <div className="panel-heading">
              <div>
                <h2>Notifications</h2>
                <p>Choose the updates you receive.</p>
              </div>
            </div>
            <label>
              <span>
                <b>Business updates</b>
                <small>Sales and performance news</small>
              </span>
              <input type="checkbox" checked={updates} onChange={() => setUpdates(!updates)} />
            </label>
            <label>
              <span>
                <b>Payout alerts</b>
                <small>Credits and withdrawals</small>
              </span>
              <input type="checkbox" checked={payouts} onChange={() => setPayouts(!payouts)} />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccountView({ view, onNavigate }: { view: string; onNavigate: (label: string) => void }) {
  if (view === "My investments") return <PortfolioView onExplore={() => onNavigate("Discover")} />;
  if (view === "Earnings") return <EarningsView />;
  if (view === "Wallet") return <WalletView />;
  return <ProfileView />;
}

function App() {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState<"Investor" | "Worker">("Investor");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<any | null>(null);
  const [amount, setAmount] = useState(1000);
  const [mobileNav, setMobileNav] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [activeNav, setActiveNav] = useState("Discover");

  useEffect(() => {
    async function fetchOpportunities() {
      try {
        const response = await fetch("https://cartcap-api.onrender.com/api/opportunities");
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        setOpportunities(data);
      } catch (error) {
        console.error("Error fetching live opportunities:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchOpportunities();
  }, []);

  const filtered = useMemo(
    () =>
      opportunities.filter(
        (item) =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.location}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, query, opportunities],
  );

  const navigate = (label: string, target?: string) => {
    setActiveNav(label);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (target) {
      window.setTimeout(
        () => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }),
        50,
      );
    }
  };

  const openOpportunity = (item: (typeof opportunities)[number]) => {
    setSelected(item);
    setAmount(Math.min(1000, item.goal - item.raised));
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNav ? "open" : ""}`}>
        <div className="sidebar-head">
          <Logo />
          <button
            className="icon-button mobile-close"
            onClick={() => setMobileNav(false)}
            aria-label="Close navigation"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="workspace-label">INVESTOR SPACE</div>
        <button className="workspace-select" onClick={() => navigate("My investments")}>
          <span className="workspace-icon">
            <Icon name="briefcase" size={18} />
          </span>
          <span>
            <strong>My portfolio</strong>
            <small>4 active investments</small>
          </span>
          <Icon name="chevron" size={16} />
        </button>

        <nav>
          {[
            ["Discover", "grid"],
            ["My investments", "briefcase"],
            ["Earnings", "chart"],
            ["Wallet", "wallet"],
          ].map(([label, icon]) => (
            <button
              className={activeNav === label ? "active" : ""}
              key={label}
              onClick={() => navigate(label)}
            >
              <Icon name={icon as IconName} />
              {label}
              {label === "My investments" && <span className="nav-count">4</span>}
            </button>
          ))}
        </nav>

        <div className="trust-card">
          <span>
            <Icon name="shield" />
          </span>
          <strong>Invest with clarity</strong>
          <p>Each opportunity shows verified sales, costs and payout schedules.</p>
          <button onClick={() => navigate("Discover", "how-it-works")}>
            How it works <Icon name="arrow" size={15} />
          </button>
        </div>

        <div className={`profile ${activeNav === "Profile" ? "active" : ""}`}>
          <button className="profile-main" onClick={() => navigate("Profile")}>
            <span className="avatar">AR</span>
            <span>
              <strong>Arjun Rao</strong>
              <small>Investor account</small>
            </span>
          </button>
          <button
            className="icon-button"
            onClick={() => navigate("Profile")}
            aria-label="Account settings"
          >
            <Icon name="settings" size={18} />
          </button>
        </div>
      </aside>

      {mobileNav && (
        <button
          className="nav-backdrop"
          onClick={() => setMobileNav(false)}
          aria-label="Close navigation"
        />
      )}

      <main>
        <header>
          <button
            className="icon-button menu-button"
            onClick={() => setMobileNav(true)}
            aria-label="Open navigation"
          >
            <Icon name="menu" />
          </button>
          <div className="breadcrumb">
            <span>Workspace</span>
            <b>/</b>
            <strong>{activeNav}</strong>
          </div>
          <div className="header-actions">
            <span className="status">
              <i /> Live opportunities
            </span>
            <div className="notification-wrap">
              <button
                className="icon-button"
                onClick={() => setNotifications(!notifications)}
                aria-label="Notifications"
              >
                <Icon name="bell" />
                <i className="notification-dot" />
              </button>
              {notifications && (
                <div className="notification-card">
                  <strong>Updates</strong>
                  <p>
                    <b>Bandra Burger Cart</b> crossed 75% of its funding goal.
                  </p>
                  <small>18 minutes ago</small>
                </div>
              )}
            </div>
            <button
              className="avatar header-avatar"
              onClick={() => navigate("Profile")}
              aria-label="Open profile"
            >
              AR
            </button>
          </div>
        </header>

        <div className="content">
          <div className="top-row">
            <div className="role-switch">
              <button
                className={role === "Worker" ? "active" : ""}
                onClick={() => setRole("Worker")}
              >
                <Icon name="store" size={17} /> Worker
              </button>
              <button
                className={role === "Investor" ? "active" : ""}
                onClick={() => setRole("Investor")}
              >
                <Icon name="chart" size={17} /> Investor
              </button>
            </div>
            <span className="date">
              <Icon name="clock" size={17} /> Thursday, 12 November
            </span>
          </div>

          {role === "Investor" && activeNav !== "Discover" ? (
            <AccountView view={activeNav} onNavigate={navigate} />
          ) : role === "Investor" ? (
            <>
              <section className="hero" id="discover">
                <div className="hero-copy">
                  <span className="eyebrow">
                    <i /> GROW A LOCAL BUSINESS
                  </span>
                  <h1>
                    Small capital.
                    <br />
                    Real businesses.
                  </h1>
                  <p>
                    Back hardworking street entrepreneurs and earn from the sales they make every
                    day.
                  </p>
                  <div className="hero-actions">
                    <button
                      className="primary-button"
                      onClick={() =>
                        document
                          .getElementById("opportunities")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Explore opportunities <Icon name="arrow" size={17} />
                    </button>
                    <span>
                      <b>₹100</b>
                      <small>Start investing from</small>
                    </span>
                  </div>
                </div>
                <div className="hero-visual">
                  <div className="hero-stat">
                    <span>
                      <Icon name="chart" size={18} />
                    </span>
                    <small>EST. MONTHLY RETURN</small>
                    <strong>3–10%</strong>
                    <em>Based on business performance</em>
                  </div>
                  <CartIllustration />
                </div>
              </section>

              <section className="tier-section">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">
                      <i /> BUSINESS MODELS
                    </span>
                    <h2>Choose your scale</h2>
                  </div>
                  <p>
                    From a single vending stall to an established shop, fund the model that fits
                    your strategy.
                  </p>
                </div>
                <div className="tiers">
                  {tiers.map((tier) => (
                    <button
                      key={tier.name}
                      className="tier-card"
                      onClick={() =>
                        setCategory(
                          tier.name === "Cycle & cart"
                            ? "Cart"
                            : tier.name === "Vending stall"
                              ? "All"
                              : tier.name,
                        )
                      }
                    >
                      <span
                        className="tier-icon"
                        style={{ color: tier.color, background: `${tier.color}16` }}
                      >
                        {tier.icon}
                      </span>
                      <span>
                        <strong>{tier.name}</strong>
                        <small>{tier.note}</small>
                      </span>
                      <b>{tier.value}</b>
                    </button>
                  ))}
                </div>
              </section>

              <section className="opportunity-section" id="opportunities">
                <div className="section-heading opportunity-head">
                  <div>
                    <span className="eyebrow">
                      <i /> LIVE OPPORTUNITIES
                    </span>
                    <h2>Businesses ready to grow</h2>
                  </div>
                  <label className="search-box">
                    <Icon name="search" size={18} />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search businesses"
                    />
                  </label>
                </div>
                <div className="filters">
                  {["All", "Cart", "Cycle", "Food truck", "Shop"].map((item) => (
                    <button
                      key={item}
                      className={category === item ? "active" : ""}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="opportunity-grid">
                  {filtered.map((item) => {
                    const progress = Math.round((item.raised / item.goal) * 100);
                    return (
                      <article className="opportunity-card" key={item.id}>
                        <div
                          className="business-art"
                          style={{ background: item.tint, color: item.color }}
                        >
                          <div
                            className={`mini-business ${item.category.toLowerCase().replace(" ", "-")}`}
                          >
                            <span>{item.icon}</span>
                            <i />
                            <i />
                          </div>
                          <span className="category-badge">{item.category}</span>
                          <span className="return-badge">
                            <Icon name="chart" size={14} /> {item.returns} / mo
                          </span>
                        </div>
                        <div className="card-body">
                          <h3>{item.name}</h3>
                          <p>{item.location}</p>
                          <div className="funding-line">
                            <span>
                              <b>{money(item.raised)}</b> raised
                            </span>
                            <strong>{progress}%</strong>
                          </div>
                          <div className="progress">
                            <i style={{ width: `${progress}%`, background: item.color }} />
                          </div>
                          <div className="card-meta">
                            <span>
                              <Icon name="users" size={16} />
                              <b>{item.investors}</b> investors
                            </span>
                            <span>
                              <Icon name="clock" size={16} />
                              <b>{item.days}</b> days left
                            </span>
                          </div>
                          <button onClick={() => openOpportunity(item)}>
                            View opportunity <Icon name="arrow" size={16} />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                  {filtered.length === 0 && (
                    <div className="empty-state">
                      No businesses match that search. Try another name or category.
                    </div>
                  )}
                </div>
              </section>

              <section className="economics" id="economics">
                <div className="economics-copy">
                  <span className="eyebrow">
                    <i /> TRANSPARENT ECONOMICS
                  </span>
                  <h2>See where every rupee goes.</h2>
                  <p>
                    On an ₹80 burger sale, costs are covered first. The rest is split clearly
                    between the person doing the work and the investor who funded the cart.
                  </p>
                  <div className="economics-note">
                    <Icon name="shield" size={18} />
                    <span>
                      <b>Scheduled withdrawals</b>
                      <small>Workers withdraw daily. Investors choose weekly or monthly.</small>
                    </span>
                  </div>
                  <p className="commission">
                    A 5% platform fee applies only when earnings are withdrawn.
                  </p>
                </div>
                <div className="split-card">
                  <div className="split-top">
                    <span>ONE BURGER SOLD</span>
                    <strong>₹80</strong>
                  </div>
                  <div className="split-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="split-row cost">
                    <span>
                      <i /> Ingredients & costs
                    </span>
                    <strong>
                      ₹50 <small>62.5%</small>
                    </strong>
                  </div>
                  <div className="split-row worker">
                    <span>
                      <i /> Worker earns
                    </span>
                    <strong>
                      ₹20 <small>25%</small>
                    </strong>
                  </div>
                  <div className="split-row investor">
                    <span>
                      <i /> Investor earns
                    </span>
                    <strong>
                      ₹10 <small>12.5%</small>
                    </strong>
                  </div>
                </div>
              </section>

              <section className="models" id="how-it-works">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">
                      <i /> INVEST YOUR WAY
                    </span>
                    <h2>Two paths to returns</h2>
                  </div>
                </div>
                <div className="model-grid">
                  <div className="model-card featured">
                    <span className="model-icon">
                      <Icon name="spark" />
                    </span>
                    <span className="model-tag">LONG-TERM</span>
                    <h3>Equity partnership</h3>
                    <p>
                      Own a lasting share of the business and participate in its monthly earnings as
                      it grows.
                    </p>
                    <strong>
                      3–10% <small>estimated monthly return</small>
                    </strong>
                    <ul>
                      <li>
                        <Icon name="check" size={15} /> Ongoing revenue share
                      </li>
                      <li>
                        <Icon name="check" size={15} /> Weekly or monthly payouts
                      </li>
                    </ul>
                  </div>
                  <div className="model-card">
                    <span className="model-icon">
                      <Icon name="clock" />
                    </span>
                    <span className="model-tag">FAST LENDING</span>
                    <h3>Fund to ownership</h3>
                    <p>
                      Finance the business asset, earn accelerated returns, and help the worker own
                      it outright.
                    </p>
                    <strong>
                      Fixed term <small>until capital is repaid</small>
                    </strong>
                    <ul>
                      <li>
                        <Icon name="check" size={15} /> Faster capital recovery
                      </li>
                      <li>
                        <Icon name="check" size={15} /> Clear ownership milestone
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="worker-hero" id="discover">
              <div>
                <span className="eyebrow">
                  <i /> BUILD YOUR BUSINESS
                </span>
                <h1>
                  Your work can
                  <br />
                  become your asset.
                </h1>
                <p>
                  Start with investor-backed equipment, track every sale clearly, and work toward
                  full ownership.
                </p>
                <button className="primary-button" onClick={() => setRole("Investor")}>
                  See how investors fund you <Icon name="arrow" size={17} />
                </button>
              </div>
              <CartIllustration />
              <div className="worker-steps">
                <span>
                  <b>01</b> Choose a business model
                </span>
                <span>
                  <b>02</b> Get funded by the community
                </span>
                <span>
                  <b>03</b> Earn daily and build ownership
                </span>
              </div>
            </section>
          )}

          <footer>
            <Logo />
            <p>Clear capital for hardworking local businesses.</p>
            <span>© 2025 CartCap</span>
          </footer>
        </div>
      </main>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div
            className="fund-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fund-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="icon-button modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <Icon name="close" />
            </button>
            <span className="modal-icon">
              <Icon name="store" />
            </span>
            <span className="eyebrow">
              <i /> FRACTIONAL FUNDING
            </span>
            <h2 id="fund-title">Invest in {selected.name}</h2>
            <p>
              Join {selected.investors} investors backing this {selected.category.toLowerCase()}.
            </p>
            <div className="amount-panel">
              <label>Your investment</label>
              <strong>{money(amount)}</strong>
              <input
                type="range"
                min="100"
                max={Math.min(10000, selected.goal - selected.raised)}
                step="100"
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
              />
              <div>
                <span>₹100</span>
                <span>{money(Math.min(10000, selected.goal - selected.raised))}</span>
              </div>
            </div>
            <div className="estimate">
              <span>Estimated monthly earning</span>
              <strong>
                {money(Math.round((amount * Number(selected.returns.split("–")[0])) / 100))}–
                {money(
                  Math.round(
                    (amount * Number(selected.returns.split("–")[1].replace("%", ""))) / 100,
                  ),
                )}
              </strong>
            </div>
            <button className="primary-button modal-action" onClick={() => setSelected(null)}>
              Continue with {money(amount)} <Icon name="arrow" size={17} />
            </button>
            <small className="risk-note">
              <Icon name="shield" size={14} /> Returns vary with business performance. Review terms
              before investing.
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;