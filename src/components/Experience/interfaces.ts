export interface ExperienceInterface {
    companyName: string,
    position: string,
    work:  string[],
}

export interface ExperienceDetails extends ExperienceInterface{
    duration: string,
}