import { MajorActions } from "./Major.types"
import { EventsActions } from "./Events.types"
import { NewsActions } from "./News.types"
import { SuggestionsActions } from "./Suggestions.types"
import { CampusActions } from "./Campuses.types"
import { NotificationsActions } from "./Notifications.types"

export type AppActions =
  | MajorActions
  | EventsActions
  | NewsActions
  | SuggestionsActions
  | CampusActions
  | NotificationsActions
