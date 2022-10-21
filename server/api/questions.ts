interface Question {
    question: string;
    answer: string;
}

export default defineEventHandler<Question[]>(() => {
    return [
        {
            question: "When will the event take place?",
            answer: "The event will take place from Friday the 27th of May till Sunday the 29th of May. Further details will be made available at a later date.",
        },
        {
            question: "When will the linter shut up?",
            answer: "It will shut up when I remove this lorum ipsum stuff",
        },
        {
            question: "When will Dany be happy?",
            answer: "Dany is always busy so I dont know if he will be happy",
        },
        {
            question: "When will Marit go crazy?",
            answer: "When this linter will not shut up, also I am conviced she already is.",
        },
        {
            question: "When will Marit stop making spelling mistakes?",
            answer: "Never.",
        },
    ];
});
