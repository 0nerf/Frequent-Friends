export type PresenceStatus = "online" | "idle" | "dnd" | "offline" | "invisible";

export interface FrequencyData {
    /** dm score — exponentially-decayed sum of DM interaction points */
    ds: number;
    /** voice score — exponentially-decayed sum of voice co-presence points */
    vs: number;
    /** dm last — timestamp (ms) of the last recorded DM interaction */
    dl: number;
    /** voice last — timestamp (ms) of the last recorded voice interaction */
    vl: number;
    /** affinity seed — initial score contribution seeded from Discord's affinity store */
    af: number;
}
