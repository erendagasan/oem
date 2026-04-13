# SmartSource (OEM HUB) Demo Implementation Plan

This plan keeps **all requirements from `reqs.txt`** while intentionally staying **demo-grade** (not production-hardened).

## 1) Goal and Approach

- Build a complete, presentation-ready Next.js prototype covering all 4 phases.
- Use realistic dummy data and simulated integrations.
- Prioritize clear business value, smooth storytelling, and reliable demo flow.
- Skip production-level complexity (hardening, real infra, enterprise auth/billing).

## 2) Scope Commitments

### In Scope

- Full requirement coverage from Phase 1 to Phase 4.
- End-to-end user journey: login -> upload/input -> OEM match -> comparison -> recommendation approval.
- Dashboard visuals for spend, markup, savings, and lead-time impact.
- Pilot testing and revision simulation screens.
- Competitor positioning and financial model screens.
- Presentation mode for stakeholder walkthrough.

### Out of Scope (Production-level items)

- Real SAP/ERP live integration.
- Real barcode hardware or RFID device integration.
- Real authentication/authorization system.
- Multi-tenant architecture and enterprise security hardening.
- Real billing/contract workflows.
- Advanced observability/monitoring and SRE setup.

## 3) Product Modules

1. **Landing + Problem Context**
   - Hidden intermediary markup problem.
   - Target user profiles and pain points.
   - Innovation narrative (speed, transparency, savings).

2. **Smart Analysis Workspace**
   - Mock corporate login.
   - Upload sample data or use preloaded demo dataset.
   - OEM matching results and confidence indication.
   - Price and lead-time comparison.

3. **Decision Center**
   - Prioritized savings opportunities.
   - Route-change approval simulation.
   - Expected budget impact summary.

4. **Pilot & Feedback Module**
   - Simulated user test sessions.
   - Feedback capture and categorization (bug/improvement/suggestion).
   - Revision tracking view.

5. **Market Positioning Module**
   - Competitor comparison matrix.
   - Positioning statements based on speed/ROI/transparency.

6. **Revenue & Financial Module**
   - SaaS subscription, success-commission, and hybrid views.
   - Editable assumptions and resulting monthly/yearly outputs.

7. **Presentation Mode**
   - Executive summary page.
   - Key outcomes and ROI narrative for final pitch.

## 4) Requirement Mapping (reqs.txt -> implementation)

### Phase 1: Problem Definition and Analysis

- Represent core problem, affected stakeholder groups, and why it matters.
- Show target audience needs and decision pain points.
- Include process/service innovation framing in content sections.

### Phase 2: Product/Service and Business Model

- Implement key functionality: analysis, matching, comparison, recommendation flow.
- Demonstrate user advantages: time, cost, process clarity, functional impact.
- Simulate planned integrations (barcode, RFID, SAP/ERP as non-live components).
- Include digital distribution and B2B sales narrative sections.
- Include revenue model variants.

### Phase 3: Prototype, Test, Revision

- Add pilot-test simulation with representative user actions.
- Show feedback collection and prioritization logic.
- Include revision log and post-feedback improvements.
- Present market test placeholders (NPS, usage time, cycle savings).
- Reflect initial cost/revenue estimates in a visual financial summary.

### Phase 4: Final Product, Positioning, Presentation

- Provide competitor analysis table and positioning points.
- Show final revision state and documented version notes.
- Include finalized model decision view (subscription/commission/hybrid).
- Include presentation assets/screens for final demo delivery.

## 5) Dummy Data Strategy

- Dataset size: 50-100 parts, 3-5 categories, 12 months of sample purchases.
- Entities: parts, OEMs, intermediary suppliers, purchase records, match outcomes, recommendations.
- Metrics: markup %, potential savings, annualized gain, lead-time reduction, confidence score.
- Include edge cases: missing barcode, multiple OEM candidates, low-confidence matches.
- Include flagship scenario from requirements:
  - Sensor purchased via intermediary at high price.
  - OEM alternative shows around 40% savings and reduced lead-time.

## 6) Simulated Integration Behavior

- **Barcode**: text input + "simulate scan" action.
- **RFID**: visual feed panel with mocked warehouse/truck events.
- **SAP/ERP**: CSV upload/import with fake sync status updates.
- **Export**: demo CSV/PDF actions with sample output.

## 7) UX and Demo Narrative Priorities

- Keep UI clean, fast, and business-focused.
- Ensure key insights are visible within 1-2 clicks.
- Avoid technical jargon in primary screens.
- Make desktop and mobile layouts usable for live demos.
- Provide one-click path through the full value story.

## 8) Delivery Sequence

1. App skeleton and navigation for all modules.
2. Unified dummy data and calculation utilities.
3. Core analysis flow (input/upload -> match -> compare -> recommend).
4. Pilot/revision, market, and financial modules.
5. Presentation mode and executive summary.
6. Visual polish, responsive checks, and demo walkthrough rehearsal.

## 9) Acceptance Criteria (Demo-Grade)

- All major requirement areas from `reqs.txt` are represented in-product.
- End-to-end scenario runs without blockers.
- Savings/markup/lead-time calculations are coherent and consistent.
- Pilot feedback and revision cycle are demonstrable.
- Market positioning and financial model are presentation-ready.
- Demo can be delivered in 3-5 minutes with clear business impact.

## 10) Progress Checklist

- [ ] Set up Next.js project structure for all modules.
- [ ] Add and validate dummy datasets.
- [ ] Implement dashboard KPIs and charts.
- [ ] Implement part lookup/upload and OEM matching views.
- [ ] Implement comparison and recommendation approval flow.
- [ ] Implement pilot feedback and revision tracking screens.
- [ ] Implement competitor analysis and financial model screens.
- [ ] Implement executive presentation mode.
- [ ] Final responsive polish and demo script alignment.
