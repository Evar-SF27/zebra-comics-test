export interface NewRelease {
    id: Number,
    progress_one: Number,
    progress_two: Number,
    progress_three: Number,
    image: String | null,
    new: boolean,
    title: String | null,
    category: Array<String>,
    description: String
}
