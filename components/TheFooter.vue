<template>
    <div class="container">
        <div class="content">
            <p>
                W.I.S.V. ‘Christiaan Huygens’ (CH) is the study association for
                students of Applied Mathematics and Computer Science at the
                Delft University of Technology. <br />
                <br />

                Address: Mekelweg 4, 2628CD Delft <br />
                Chamber of Commerce: 40397077<br />
                Phone: 015-278 2532
            </p>
        </div>

        <div class="copyright-socialmedia-container">
            <div class="copyright">
                <p>
                    Copyright © 2015-{{ new Date().getFullYear() }} by W.I.S.V.
                    ‘Christiaan Huygens’. All rights reserved.
                </p>
            </div>
            <div class="socialmedia">
                <p>Follow us</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: var(--indent-m);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-white);
    position: relative;
    z-index: 5;

    p {
        color: black;
    }
}

.copyright-socialmedia-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: black;
    }
}
</style>
