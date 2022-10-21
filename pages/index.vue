<template>
    <div>
        <IntroImage></IntroImage>
        <TournamentComponent
            title="Official Tournaments"
            :tournaments="games"
        ></TournamentComponent>

        <TextImage image="/images/gamers.jpg" :inverse="true">
            <h2>What is included in your ticket?</h2>
            <p>
                Buying a ticket will get you the following perks: <br />
                <br />Admission to the event from Friday evening until Sunday
                evening Breakfast, lunch and dinner on Saturday Breakfast and
                lunch on Sunday Admission to the LAUNCH Area for offline fun A
                personal desk (dimensions around 100x80 cm) for your PC A comfy
                chair to sit on The opportunity to participate in official
                tournaments with prize pools The opportunity to participate in
                all unofficial tournaments hosted by guests at the event
            </p>

            <LinkButton size="small" :inverse="true">Buy Ticket</LinkButton>
        </TextImage>
        <SponsorBanner :sponsors="sponsors"></SponsorBanner>
        <TextImage image="/images/gamers.jpg" :inverse="false">
            <h2>FAQ</h2>
            <QuestionAnswer
                v-for="question in questions"
                :key="question.question"
                :question="question.question"
            >
                {{ question.answer }}
            </QuestionAnswer>
        </TextImage>
    </div>
</template>

<script setup lang="ts">
const { data: questions } = await useFetch("/api/questions");

const sponsors = [
    {
        title: "Presented by",
        sponsors: ["/images/chlogo.png", "/images/chlogo.png"],
    },
    {
        title: "Sponsored by",
        sponsors: ["/images/chlogo.png", "/images/chlogo.png"],
    },
];

const games = [
    {
        gameImage: "/images/minecraft.jpg",
        game: "Minecraft",
        form: "3V3",
        logo: "/images/logo.png",
        prize: "goodie bag",
    },
];
</script>
