import { ISuggestion } from '../Models/Suggestion';

export const INITIALIZE_SUGGESTIONS = 'INITIALIZE_SUGGESTIONS';

export interface initializeSuggestions {
  type: typeof INITIALIZE_SUGGESTIONS;
  suggestions: ISuggestion[];
}

export type SuggestionsActions = initializeSuggestions;
