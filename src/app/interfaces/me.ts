import { Degree } from "./degree";
import { Experience } from "./experience";
import { Miscellaneous } from "./miscellaneous";

export interface me {
    name: string,
    surname: string,
    birthday: string,
    mail: string,
    phone : string,
    Github : string,
    languages: string,
    experience: [Experience],
    degree: [Degree],
    miscellaneous: [Miscellaneous]
}
