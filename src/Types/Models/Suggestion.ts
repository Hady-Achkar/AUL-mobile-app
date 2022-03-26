import { ICourse } from "./Course"

export interface ISuggestion {
  votes: string[]
  _id: string
  course: ICourse
  deadline: string
  semester: string
  createdAt: Date
  updatedAt: Date
  isVoted: boolean
}
