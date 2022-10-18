<template>
    <div>
        <TextImage image="/Images/Gamers.jpg" :inverse="false">
            <h2>Who are we?</h2>
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
                Logi is de beste positie.
            </p>
        </TextImage>
        <SponsorBanner :sponsors="sponsors"></SponsorBanner>
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
</script>
