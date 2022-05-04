export interface Issue {
    issueNo: number
    title:String
    description: String
    priority: 'low'|'high'
    type: 'Feature'|'Bug'|'Documentation'
    completed? :Date
}
