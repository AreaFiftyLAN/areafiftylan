<template>
    <div>
        <TextImage image="/Images/Gamers.jpg" :inverse="false">
            <h1 style="padding-top: 48px">Who are we?</h1>
            <p>
                The LANcie is the committee that organises AreaFiftyLAN each
                year. It's our job to make sure everything goes to plan and that
                all potential problems are taken care of. We don't bite, so
                don't hesitate to contact us with a good story, some questions
                or just a casual conversation about gaming. We're always open to
                feedback and fun ideas. We hope to see you at the event! If you
                have any questions or are interested in sponsoring the event,
                please send an email with our contact form.
                <br /><br />
                Logi is the best position by the way.
            </p>
        </TextImage>
        <SponsorBanner :sponsors="sponsors">
            <p>PLACEHOLDER</p>
        </SponsorBanner>
        <ImageScroll title="Oud LAN" :images="images"></ImageScroll>
    </div>
</template>

<script setup lang="ts">
const sponsors = [
    {
        title: "Presented by",
        sponsors: ["/Images/chlogo.png", "/Images/chlogo.png"],
    },
    {
        title: "Sponsored by",
        sponsors: ["/Images/chlogo.png", "/Images/chlogo.png"],
    },
];

const images = ["/Images/lan1.jpg", "/Images/lan2.jpg", "/Images/lan3.jpg"];
</script>
