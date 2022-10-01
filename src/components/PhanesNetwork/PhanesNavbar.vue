<template>
    <div class="wrapper">
        <nav class="navbar">
            <img src="@/assets/phanesImages/logo.png" alt="" class="logo" @click="$router.push('/')">
            <ul class="items">
                <li class="item" @click="scrollTo('phanesNetwork')">Phanes Network</li>
                <li class="item" @click="scrollTo('governance')">Governance</li>
                <li class="item" @click="scrollTo('docs')">Docs</li>
                <li class="item" @click="scrollTo('faqs')">FAQ</li>
            </ul>
            <router-link class="launch-btn" to="/dashboardds">Launch App</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    methods:{
        scrollTo(id){
            const sec = document.getElementById(id)
            if(sec){
                sec.scrollIntoView()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(7, 14, 12, 0.7);
    backdrop-filter: blur(20px);
}
 .navbar{
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 24px;
    @media only screen and (max-width:980px){
        padding: 25px 24px;
    }
    .logo{
        cursor: pointer;
        width: 130px;
        @media only screen and (max-width:980px){
            width: 100px;
        }
        @media only screen and (max-width:780px){
            // width 540
        }
        @media only screen and (max-width:580px){
            // width 340
            width: 40px;
        }
    }
    .items{
        list-style: none;
        display: flex;
        &>*:not(:last-child){
            margin-right: 35px;
            @media only screen and (max-width:980px){
                margin-right: 15px;
            }
            @media only screen and (max-width:580px){
                // width 340
                margin-right: 5px;
            }
        }
        .item{
            color: #fff;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 18px;
            cursor: pointer;
            @media only screen and (max-width:980px){
                font-size: 16px;
            }
            @media only screen and (max-width:780px){
                font-size: 12px;
            }
            @media only screen and (max-width:580px){
                font-weight: 400;
                font-size: 8px;
            }
        }
    }

    .launch-btn{
        border: none;
        outline: none;
        width: 159px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(95.34deg, #09976E -21.44%, #084F65 108.23%);
        border-radius: 8px;
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
        
        @media only screen and (max-width:980px){
            width: 120px;
            height: 36px;
            border-radius: 5px;
            font-size: 14px;
        }
        @media only screen and (max-width:780px){
            width: 100px;
            height: 26px;
            font-size: 12px;
        }
        @media only screen and (max-width:580px){
            // width 340
            width: 50px;
            height: 18px;
            font-weight: 400;
            font-size: 8px;
        }
    }

}
</style>
