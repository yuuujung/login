<template>
    <main>
        <div>
        <p>안녕하세요 {{ currentUser['USER_ID'] }}님</p>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        // ...mapGetters("auth", ["currentUser"]),
        ...mapState("auth", ["currentUser"]),
    },
    created() {
        // console.log(this.currentUser.USER_NM);
    },
}
</script>