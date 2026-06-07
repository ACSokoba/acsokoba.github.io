import type { Language } from "../../i18n";

export type JobId = 'sfr' | 'carrefour' | 'orange';

export interface ResumeState {
    expandedJobs: {
        sfr: boolean;
        carrefour: boolean;
        orange: boolean;
    };
}

export interface ResumeProps {
    language: Language;
} 