"use client";

import React from "react";
import type { ProjectCaseStudy } from "@/data/portfolio";

interface ArchitectureDiagramProps {
  type: ProjectCaseStudy["diagramType"];
  compact?: boolean;
}

export function ArchitectureDiagram({
  type,
  compact = false,
}: ArchitectureDiagramProps) {
  return (
    <div
      className={`w-full bg-surface border border-hairline overflow-hidden select-none ${
        compact ? "p-4 sm:p-5" : "p-5 sm:p-8"
      }`}
      aria-label={`Technical architecture schematic for ${type}`}
    >
      {/* Top technical header bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline font-mono text-[11px] uppercase tracking-wider text-muted">
        <span>
          {type === "erp-architecture" && "FIG 1.0 — ACID INVENTORY LEDGER & 3-WAY MATCHING"}
          {type === "cohort-analytics" && "FIG 2.0 — COHORT RETENTION & RFM ANALYTICAL PIPELINE"}
          {type === "etl-warehouse" && "FIG 3.0 — MEDALLION ELT & KIMBALL STAR SCHEMA"}
          {type === "churn-ml-pipeline" && "FIG 4.0 — LEAKAGE-SAFE SCIKIT-LEARN CLASSIFICATION"}
          {type === "booking-system" && "FIG 5.0 — TEMPORAL RANGE GIST EXCLUSION ARCHITECTURE"}
          {type === "financial-mart" && "FIG 6.0 — MANIFEST-TO-WAYBILL COST ALLOCATION MART"}
        </span>
        <span className="text-cobalt font-medium">SYSTEM BLUEPRINT</span>
      </div>

      {type === "erp-architecture" && (
        <svg
          viewBox="0 0 800 260"
          className="w-full h-auto text-ink"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid background lines */}
          <line x1="0" y1="65" x2="800" y2="65" stroke="currentColor" strokeOpacity="0.06" />
          <line x1="0" y1="130" x2="800" y2="130" stroke="currentColor" strokeOpacity="0.06" />
          <line x1="0" y1="195" x2="800" y2="195" stroke="currentColor" strokeOpacity="0.06" />

          {/* Box 1: RBAC Client */}
          <rect x="16" y="45" width="185" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="32" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            01 / CLIENT LAYER
          </text>
          <text x="32" y="96" fill="currentColor" fontSize="13" fontWeight="600">
            Next.js Operations UI
          </text>
          <line x1="32" y1="110" x2="185" y2="110" stroke="currentColor" strokeOpacity="0.15" />
          <text x="32" y="132" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Purchase Requisition
          </text>
          <text x="32" y="152" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • PO Approval Gate
          </text>
          <text x="32" y="172" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Goods Receipt Note
          </text>
          <text x="32" y="192" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • RBAC Guard
          </text>

          {/* Arrow 1 -> 2 */}
          <line x1="201" y1="130" x2="268" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="268,126 276,130 268,134" fill="var(--accent-cobalt)" />
          <text x="212" y="120" fill="var(--text-secondary)" fontSize="9.5" fontFamily="monospace">
            Zod DTO
          </text>

          {/* Box 2: Domain Service */}
          <rect x="276" y="45" width="220" height="170" stroke="var(--accent-cobalt)" strokeWidth="1.5" fill="var(--bg-primary)" />
          <text x="292" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            02 / TRANSACTION SERVICE
          </text>
          <text x="292" y="96" fill="currentColor" fontSize="13" fontWeight="600">
            ACID Stock Ledger Engine
          </text>
          <line x1="292" y1="110" x2="480" y2="110" stroke="currentColor" strokeOpacity="0.15" />
          <text x="292" y="132" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            1. SELECT ... FOR UPDATE
          </text>
          <text x="292" y="152" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            2. Assert qty_after &gt;= 0
          </text>
          <text x="292" y="172" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            3. Append Ledger Delta
          </text>
          <text x="292" y="192" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            4. Upsert Balance Snapshot
          </text>

          {/* Arrow 2 -> 3 */}
          <line x1="496" y1="95" x2="564" y2="95" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points="564,91 572,95 564,99" fill="currentColor" />
          <line x1="496" y1="168" x2="564" y2="168" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points="564,164 572,168 564,172" fill="currentColor" />

          {/* Box 3A: Immutable Ledger */}
          <rect x="572" y="45" width="212" height="76" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="586" y="68" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            POSTGRESQL (IMMUTABLE)
          </text>
          <text x="586" y="88" fill="currentColor" fontSize="12" fontFamily="monospace" fontWeight="600">
            stock_ledger_entries
          </text>
          <text x="586" y="106" fill="var(--text-secondary)" fontSize="10" fontFamily="monospace">
            PK entry_id | sku_id | delta_qty
          </text>

          {/* Box 3B: Balance Snapshot */}
          <rect x="572" y="139" width="212" height="76" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="586" y="162" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            POSTGRESQL (SNAPSHOT)
          </text>
          <text x="586" y="182" fill="currentColor" fontSize="12" fontFamily="monospace" fontWeight="600">
            warehouse_stock_balances
          </text>
          <text x="586" y="200" fill="var(--text-secondary)" fontSize="10" fontFamily="monospace">
            UK (sku_id, wh_id) | qty_on_hand
          </text>
        </svg>
      )}

      {type === "cohort-analytics" && (
        <svg
          viewBox="0 0 800 260"
          className="w-full h-auto text-ink"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" y="45" width="175" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="30" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            RAW LOGS (500K+ ROWS)
          </text>
          <text x="30" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Invoice Line Exports
          </text>
          <text x="30" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • invoice_no (C-prefix)
          </text>
          <text x="30" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • stock_code &amp; qty
          </text>
          <text x="30" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • unit_price_gbp
          </text>
          <text x="30" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • nullable customer_id
          </text>

          <line x1="191" y1="130" x2="245" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="245,126 253,130 245,134" fill="var(--accent-cobalt)" />

          <rect x="253" y="45" width="245" height="170" stroke="var(--accent-cobalt)" strokeWidth="1.5" fill="var(--bg-primary)" />
          <text x="269" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            ANALYTICAL SQL (DUCKDB / PG)
          </text>
          <text x="269" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Window &amp; CTE Transformations
          </text>
          <text x="269" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            1. Isolate Credit Notes (Returns)
          </text>
          <text x="269" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            2. MIN(invoice_date) OVER customer
          </text>
          <text x="269" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            3. Month Index (M0 .. M12)
          </text>
          <text x="269" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            4. NTILE(5) Recency/Freq/Monetary
          </text>

          <line x1="498" y1="130" x2="552" y2="130" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points="552,126 560,130 552,134" fill="currentColor" />

          <rect x="560" y="45" width="224" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="576" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            DECISION OUTPUTS
          </text>
          <text x="576" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Retention &amp; RFM Marts
          </text>
          {/* Mini cohort triangle visualization */}
          <rect x="576" y="112" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.85" />
          <rect x="612" y="112" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.55" />
          <rect x="648" y="112" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.35" />
          <rect x="684" y="112" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.2" />

          <rect x="576" y="130" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.85" />
          <rect x="612" y="130" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.45" />
          <rect x="648" y="130" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.3" />

          <rect x="576" y="148" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.85" />
          <rect x="612" y="148" width="32" height="14" fill="var(--accent-cobalt)" fillOpacity="0.5" />

          <text x="576" y="186" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            • Cohort Decay Matrix (%)
          </text>
          <text x="576" y="202" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            • High-LTV At-Risk Customer List
          </text>
        </svg>
      )}

      {type === "etl-warehouse" && (
        <svg
          viewBox="0 0 800 260"
          className="w-full h-auto text-ink"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bronze */}
          <rect x="16" y="45" width="190" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="30" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            SCHEMA: RAW (BRONZE)
          </text>
          <text x="30" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Batch Ingestion
          </text>
          <text x="30" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • CSV / JSON Extractors
          </text>
          <text x="30" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • SHA-256 record_hash
          </text>
          <text x="30" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • ingested_at_utc
          </text>
          <text x="30" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Pydantic Validation
          </text>

          <line x1="206" y1="130" x2="262" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="262,126 270,130 262,134" fill="var(--accent-cobalt)" />

          {/* Silver */}
          <rect x="270" y="45" width="215" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="286" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            SCHEMA: STG (SILVER)
          </text>
          <text x="286" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Clean &amp; Deduplicate
          </text>
          <text x="286" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Type Casting &amp; UTC
          </text>
          <text x="286" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • ROW_NUMBER() Dedup
          </text>
          <text x="286" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Null Key Quality Gate
          </text>
          <text x="286" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Idempotent Upsert Ready
          </text>

          <line x1="485" y1="130" x2="541" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="541,126 549,130 541,134" fill="var(--accent-cobalt)" />

          {/* Gold Star Schema */}
          <rect x="549" y="45" width="235" height="170" stroke="var(--accent-cobalt)" strokeWidth="1.5" fill="var(--bg-primary)" />
          <text x="565" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            SCHEMA: MART (KIMBALL STAR)
          </text>
          <text x="565" y="95" fill="currentColor" fontSize="12.5" fontFamily="monospace" fontWeight="600">
            fct_service_operations
          </text>
          <line x1="565" y1="108" x2="768" y2="108" stroke="currentColor" strokeOpacity="0.15" />
          <text x="565" y="128" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            ├── dim_date (date_key)
          </text>
          <text x="565" y="148" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            ├── dim_entity (SCD Type 2)
          </text>
          <text x="565" y="168" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            ├── dim_service (service_sk)
          </text>
          <text x="565" y="192" fill="var(--accent-cobalt)" fontSize="10.5" fontFamily="monospace">
            ✓ Post-Load SQL Assertions
          </text>
        </svg>
      )}

      {type === "churn-ml-pipeline" && (
        <svg
          viewBox="0 0 800 260"
          className="w-full h-auto text-ink"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" y="45" width="210" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="32" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            01 / FEATURE ENGINEERING
          </text>
          <text x="32" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            ColumnTransformer
          </text>
          <text x="32" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Tenure Spend Ratio
          </text>
          <text x="32" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Median Imputation
          </text>
          <text x="32" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • StandardScaler (Numeric)
          </text>
          <text x="32" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • OneHotEncoder (Cat)
          </text>

          <line x1="226" y1="130" x2="278" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="278,126 286,130 278,134" fill="var(--accent-cobalt)" />

          <rect x="286" y="45" width="225" height="170" stroke="var(--accent-cobalt)" strokeWidth="1.5" fill="var(--bg-primary)" />
          <text x="302" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            02 / STRATIFIED 5-FOLD CV
          </text>
          <text x="302" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Model &amp; Calibration
          </text>
          <text x="302" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • L2 Logistic Regression
          </text>
          <text x="302" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • HistGradientBoosting
          </text>
          <text x="302" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • ROC-AUC &amp; PR-AUC Eval
          </text>
          <text x="302" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Zero Train-Test Leakage
          </text>

          <line x1="511" y1="130" x2="563" y2="130" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points="563,126 571,130 563,134" fill="currentColor" />

          <rect x="571" y="45" width="213" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="587" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            03 / DECISION OUTPUT
          </text>
          <text x="587" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Interpretable Risk Tiers
          </text>
          <text x="587" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Calibrated P(Churn)
          </text>
          <text x="587" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Cost-Optimal Threshold
          </text>
          <text x="587" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Odds-Ratio Attribution
          </text>
          <text x="587" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Actionable Retention CSV
          </text>
        </svg>
      )}

      {type === "booking-system" && (
        <svg
          viewBox="0 0 800 260"
          className="w-full h-auto text-ink"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" y="45" width="210" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="32" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            01 / SCHEDULE EXPLORER
          </text>
          <text x="32" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            React + Next.js Client
          </text>
          <text x="32" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Room &amp; Equipment Filter
          </text>
          <text x="32" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Daily / Weekly Grid
          </text>
          <text x="32" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Accessible Slot Picker
          </text>
          <text x="32" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Coordinator Review Queue
          </text>

          <line x1="226" y1="130" x2="282" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="282,126 290,130 282,134" fill="var(--accent-cobalt)" />

          <rect x="290" y="45" width="210" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="306" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            02 / API &amp; POLICY CHECK
          </text>
          <text x="306" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Reservation Handler
          </text>
          <text x="306" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Half-Open [start, end)
          </text>
          <text x="306" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Max Duration Rules
          </text>
          <text x="306" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Conflict Preview Query
          </text>
          <text x="306" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Role Permission Check
          </text>

          <line x1="500" y1="130" x2="554" y2="130" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <polygon points="554,126 562,130 554,134" fill="var(--accent-cobalt)" />

          <rect x="562" y="45" width="222" height="170" stroke="var(--accent-cobalt)" strokeWidth="1.5" fill="var(--bg-primary)" />
          <text x="578" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            03 / POSTGRESQL GIST GUARD
          </text>
          <text x="578" y="95" fill="currentColor" fontSize="12.5" fontFamily="monospace" fontWeight="600">
            EXCLUDE USING gist
          </text>
          <text x="578" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • room_id WITH =
          </text>
          <text x="578" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • time_slot (TSTZRANGE) &amp;&amp;
          </text>
          <text x="578" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • WHERE status = APPROVED
          </text>
          <text x="578" y="188" fill="var(--accent-cobalt)" fontSize="10.5" fontFamily="monospace">
            ✓ Zero Double-Booking Guaranteed
          </text>
        </svg>
      )}

      {type === "financial-mart" && (
        <svg
          viewBox="0 0 800 260"
          className="w-full h-auto text-ink"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" y="40" width="195" height="78" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="30" y="64" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            SOURCE A: LOGISTICS
          </text>
          <text x="30" y="84" fill="currentColor" fontSize="12.5" fontWeight="600">
            Waybill Dispatch Logs
          </text>
          <text x="30" y="102" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            Grain: 1 row per waybill_id
          </text>

          <rect x="16" y="142" width="195" height="78" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="30" y="166" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            SOURCE B: FINANCE
          </text>
          <text x="30" y="186" fill="currentColor" fontSize="12.5" fontWeight="600">
            Carrier Manifest Bills
          </text>
          <text x="30" y="204" fill="var(--text-secondary)" fontSize="10.5" fontFamily="monospace">
            Grain: 1 row per manifest_id
          </text>

          <line x1="211" y1="79" x2="278" y2="115" stroke="var(--accent-cobalt)" strokeWidth="1.5" />
          <line x1="211" y1="181" x2="278" y2="145" stroke="var(--accent-cobalt)" strokeWidth="1.5" />

          <rect x="278" y="45" width="235" height="170" stroke="var(--accent-cobalt)" strokeWidth="1.5" fill="var(--bg-primary)" />
          <text x="294" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            SQL RECONCILIATION LAYER
          </text>
          <text x="294" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Grain Alignment &amp; Split
          </text>
          <text x="294" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Match waybill → manifest
          </text>
          <text x="294" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Weight Ratio Window Sum
          </text>
          <text x="294" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • SLA Breach Boolean Flag
          </text>
          <text x="294" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Unmatched Exception View
          </text>

          <line x1="513" y1="130" x2="568" y2="130" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points="568,126 576,130 568,134" fill="currentColor" />

          <rect x="576" y="45" width="208" height="170" stroke="currentColor" strokeOpacity="0.25" fill="var(--bg-primary)" />
          <text x="592" y="72" fill="var(--accent-cobalt)" fontSize="10" fontFamily="monospace" fontWeight="600">
            DECISION SUPPORT UI
          </text>
          <text x="592" y="95" fill="currentColor" fontSize="13" fontWeight="600">
            Route &amp; SLA Explorer
          </text>
          <text x="592" y="122" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Cost per Kg by Zone
          </text>
          <text x="592" y="142" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • On-Time Delivery %
          </text>
          <text x="592" y="162" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Carrier Variance Audit
          </text>
          <text x="592" y="182" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">
            • Clean CSV Export
          </text>
        </svg>
      )}
    </div>
  );
}
