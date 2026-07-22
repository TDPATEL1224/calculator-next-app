# Demo Guide — Richter Project Management System

**Purpose of this file:** a script you can study and rehearse from, then
present to your manager and director. It's written so you can read it
once, practice the click-path a couple of times, and then talk from
memory during the real thing — not read off a screen.

**Total runtime:** ~18–22 minutes demo + 5–10 minutes questions. Cut the
sections marked *(cut if short on time)* first if you need to.

---

## 0. Before you start (do this the morning of, not live in front of them)

- [ ] `docker compose up -d` (root folder) — Postgres + Redis
- [ ] `npm run dev` in `backend/`
- [ ] `npm run dev` in `frontend/`
- [ ] Open `http://localhost:5173` in a **browser you've cleared cookies
      in**, or a fresh incognito window — you want to start at the login
      screen, not already logged in
- [ ] Log in once yourself first as `admin@pms.local` / `Admin@12345`
      just to confirm everything's alive before they arrive
- [ ] **Clean up test data** — delete any project/task/tracker item with
      an obviously fake name (anything like "test", "verify", "qq"). Go
      to Projects → open each throwaway one → the trash icon in the
      header. A demo full of junk data undercuts everything else.
- [ ] Pick **one real-feeling project** to be your main character for
      the whole demo (see Section 2) — don't create it live, have it
      ready with a few tasks and tracker items already in it so it looks
      lived-in, not empty
- [ ] Have a **second browser window** ready (different browser, or the
      same one in a private/incognito tab) logged in as a different
      user — this is for the live real-time moment in Section 5. Log
      that one in as `manager@pms.local` / `Test@12345`
- [ ] Silence notifications/Slack, close unrelated tabs, zoom your
      browser to 100% (not whatever you had it at while coding)

**If anything is down or broken 10 minutes before the demo, don't try to
fix it live** — fall back to whichever sections still work and skip the
rest. A shorter working demo beats a longer broken one.

---

## 1. Open (60 seconds) — say this, don't click anything yet

Don't start by opening the app. Start by naming the problem, so
everything after this lands as "solving that," not just "a website I
built."

> "Before this, [company]'s projects lived in an Excel tracker — everyone
> had their own copy, nobody knew which version was current, there was
> no record of who changed what, and customers or suppliers who needed
> visibility either got a stale spreadsheet emailed to them or nothing
> at all.
>
> This replaces that with one shared system. I'm going to walk through
> it as if I'm running a real project end to end — creating work,
> assigning it, tracking a customer negotiation the way we used to do in
> the Excel sheet, and showing what happens when two people are working
> in it at the same time."

Then open the browser.

---

## 2. The shell — 90 seconds *(don't over-explain this, it's the appetizer)*

**Do:** Log in on screen (`admin@pms.local` / `Admin@12345`). Let them
see the login page for a second before you submit — it's clean,
branded, not a generic form.

**Say**, once you land on the dashboard:

> "This is the dashboard — every person who logs in sees a version of
> this scoped to what they're allowed to see. Admins and managers see
> everything; a customer or supplier logging in only ever sees their own
> projects, enforced at the database level, not just hidden in the UI."

**Point at, don't dwell on:**
- The KPI cards (total/active projects, overdue tasks, pending approvals
  — all live numbers, not placeholders)
- The sidebar — name the sections you'll actually demo (Projects, Tasks,
  Tracker) and skip past the rest ("Reports, Audit log, that kind of
  thing is all in here too, I'll come back to one of these")
- Theme toggle if you feel like a 5-second flex ("light, dark, or
  follows your system") — skip if time is tight

**Transition line:** "Let's go into an actual project."

---

## 3. Projects → Tasks — the core workflow (4–5 minutes)

This is where you establish the basic mechanic (create → assign →
track → discuss) before the Tracker section builds on top of it.

**Click into your pre-prepared project.**

**Say:**
> "Every project has its own space — an overview, its tasks, comments,
> file attachments, and for accounts we're actively negotiating with,
> a tracker. Let's start with tasks."

**Click the Tasks tab → show the Kanban board.**

> "This is a Kanban board — Backlog through Done. Nothing here is a
> spreadsheet row you have to remember to update; moving a card here is
> the update."

**Do live, narrating as you go:**
1. Click **Add task**. Fill in a title, pick a priority.
2. In the **Assignees** picker, select two people (e.g. yourself + one
   test user). Say while you do it:
   > "Tasks can go to more than one person — not just a single owner.
   > If I hand this to someone and they need to pull in a third person,
   > that's additive, not a handoff where you lose track of who's
   > already involved."
3. Create it. Point at it appearing on the board.
4. Click the card open. Show:
   - The assignee list (editable right there, saves instantly)
   - Scroll to **Comments** at the bottom — type one, send it
   - Scroll to **History** — say: *"Every field change is logged — who,
     when, old value, new value. Nobody can quietly edit a due date and
     deny it."*
5. Close the card. Drag/quick-move it one status to the right on the
   board.

**The notification moment (don't skip this one):**
> "When I assigned that task, both people just got a notification —
> let me show you."

Click the bell icon top-right. Point at the new notification. If you
assigned yourself, you'll see it here live.

**Transition line:** "That's the day-to-day mechanic. Now here's the
part that actually replaces the Excel sheet."

---

## 4. The Tracker — this is the centerpiece, give it the most time (7–8 minutes)

Everything before this was "a nice project tool." This is "the thing
that replaces the spreadsheet nobody trusted." Slow down here.

**Click the Tracker tab on your project.**

**Say, before clicking anything:**
> "This is modeled directly on the actual tracker we used to run this
> in Excel — same columns, same idea of 'who's court is this in,' same
> priority levels — but shared, live, and with a real history instead of
> whoever-edited-it-last-wins."

**Point at the existing rows** (you should have 2–3 tracker items
already in your demo project from prep):
- Subject / Part number
- **Priority** badge (Cost Reduction / High / Standard / etc — say
  "these are the same priority categories we used before, not something
  generic")
- **Who's court** — point out that "Them" shows the actual customer or
  supplier organization's name, not a generic label
- Assignee avatars
- Search and filters at the top — filter by priority or court live to
  show it's not just a static list

**Now create one live** — this is the feature moment:

1. Click **New item**.
2. Fill in Subject, Part number, Priority, Who's court, an assignee.
3. Point at **"What do you want to track for this item?"**:
   > "This is the part that makes it flexible instead of one rigid
   > template. Not every line item needs engineering AND supply chain
   > AND financial tracking — you pick what's relevant to this specific
   > part."
4. Check **Engineering** and **Financial** (or whichever fit your real
   data). Fill in the Financial numbers (EAU, current price, new price,
   annual savings) if you have realistic ones.
5. Create it.
6. **Reopen it.** Now you'll see tabs: Details / Financial / Engineering
   / History.
7. Click the **Engineering** tab:
   > "Engineering gets its own conversation and its own file attachments
   > — completely separate from Financial or Supply Chain. Engineering
   > doesn't have to wade through pricing chatter, and vice versa."

   Post a comment. Upload a small file if you have one handy (a PDF,
   even a throwaway one) — show the attachment appear.
8. Click the **Financial** tab — show the price fields are still there,
   plus its own attachments (for quotes/invoices).
9. Click **History** — same audit trail concept as tasks, but for every
   field on this tracker item including who got assigned when.

**Archive, quickly:**
> "When something's resolved, it gets archived — not deleted. Nothing
> in this system truly disappears, it just leaves the active view. That
> matters for anything that might get audited later."

Show the archive icon on a row, or the "Show archived" toggle.

**Close line for this section:**
> "So this one tab replaces what used to be a whole separate Excel file
> per customer — same information, but everyone's looking at the same
> live version, and there's a record of every change."

---

## 5. Real-time — the "wow, it's actually live" moment (2 minutes)

This is short but it's the moment that makes people go "oh, it's a real
app, not a form." Don't skip it even if you're running long — cut
somewhere else instead.

**Setup:** your second browser window, already logged in as a different
user, sitting on the same project's Tasks or Tracker tab.

**Do:**
1. Arrange both windows so both are visible (or screen-share both, or
   flip between them quickly).
2. In window A, move a task card, or add a comment, or create a tracker
   item.
3. Point at window B updating **without anyone refreshing it**.

**Say:**
> "Neither of these windows was refreshed — that's a live connection.
> If two people are looking at the same project, they're never looking
> at stale data waiting on someone to hit F5."

---

## 6. Admin / governance — brief, establishes it's enterprise-ready (2–3 minutes) *(cut if short on time)*

You don't need to demo every field here — the goal is just "this isn't
a toy, access and history are taken seriously."

**Click Users (admin only).**
> "Every person gets a role — Admin, Director, Manager, Employee,
> Customer, or Supplier — and what they can see is enforced by that
> role, not just by what buttons we show them."

**Click Organizations.**
> "Customers and suppliers are real entities in the system — when we
> add a customer's user account, they're scoped to only their own
> organization's projects. A customer literally cannot query another
> customer's data, even by guessing a URL."

**Click Audit log.**
> "Every meaningful action in the system — created, changed, deleted,
> approved — lands here permanently. This table can't be edited or
> deleted, even by an admin. That's deliberate."

---

## 7. Close (60–90 seconds)

Come back to the dashboard or just stop talking over the app and look
at them.

> "So to summarize what this replaces: one Excel file per customer that
> only one person could safely edit at a time, no real history, no
> access control, and no way for the people actually doing the work to
> see it live — replaced with one system, role-based access, a
> permanent audit trail, and everyone seeing the same data the moment it
> changes.
>
> What's next is [pick honestly from what's actually left — e.g.
> "automated testing," "getting this properly deployed so it's not just
> running on my laptop," "CSV import so we're not manually re-entering
> the existing tracker data"]. Happy to take questions."

---

## 8. Anticipated questions — have an answer ready, don't improvise these

**"Where does this actually run / how do people access it?"**
Be honest about current state — right now it's running locally for the
demo; deployment to a real server is planned but not done yet. Don't
overclaim it's live in production if it isn't.

**"Is our data secure?"**
Passwords are hashed, not stored in plain text. Sessions expire and
rotate. Every customer/supplier's data is walled off from every other
one at the database query level, not just hidden in the interface.

**"What happens if someone deletes something by mistake?"**
Nothing is truly gone — deletes are "soft," meaning it disappears from
view but the record and its full history still exist. Full undo/restore
UI isn't built yet, but the data isn't destroyed.

**"How long did this take / what's left?"**
Answer honestly and specifically rather than vaguely — pull the phase
list from `phases.md` if you want exact scope (automated testing,
containerized deployment, and production release are the three
remaining phases).

**"Can [some role] see [some other role]'s data?"** — know the actual
answer before you're asked: Admin/Director/Manager see everything
internal; Employees see projects/tasks they're on; Customers and
Suppliers only ever see their own organization's projects, and cannot
see tracker/pricing data at all (that's internal-only by design).

---

## 9. Rehearsal checklist

Do a full dry run at least once, out loud, before the real thing:

- [ ] Time yourself once through Sections 1–7 without stopping
- [ ] Know which 2 sections you'd cut if running long (suggested: cut
      Section 6 first, then trim Section 5 to just a quick point rather
      than a full two-window demo)
- [ ] Practice saying the **why** lines (the quoted paragraphs above) out
      loud once or twice — those are the lines that make this land as
      "solved a real problem" instead of "here are some buttons"
- [ ] Decide in advance what you'll say if something breaks live — a
      calm "let me show you that one from a different angle" while you
      pivot to a working section beats freezing
