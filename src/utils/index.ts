import { Priority } from "./constants";

export const getBgColor = (priority: Priority) => {
    let bgColor = '#F56236'

    switch (priority) {
        case Priority.Info:
            bgColor = '#88FCA3'
            break
        case Priority.Warning:
            bgColor = '#FCE788'
            break
    }

    return bgColor
}
