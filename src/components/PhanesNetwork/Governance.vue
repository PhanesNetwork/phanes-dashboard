<template>
  <div id="governance">
    <h2 class="heading">Governed by the community</h2>
    <p class="snippet">Phanes is a fully decentralized, community governed protocol with 0 token holders.</p>
    <button class="governance-btn"><a href="https://guild.xyz/phanes-network" target="_blank">Governance</a></button>
  </div>
  <div class="faas-saas">
    <img src="@/assets/phanesImages/faasbg.png" class="bg" alt="">
    <h2 class="heading">Interested in deploying a FAAS/SAAS </h2>
    <p class="snippet">Submit a proposal to deploy a new project on the Phanes staking platform. </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#governance{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 131px;
  

  background-image:  linear-gradient(180deg, rgba(7, 14, 12, 0.8) 27.51%, rgba(2, 3, 3, 0) 100%), url('@/assets/phanesImages/governedbg.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  

  @media only screen and (max-width:1400px) {
    margin-bottom: 84px;
  }
  @media only screen and (max-width:780px) {
    margin-bottom: 0px;
  }

  .heading{
    width: 456px;
    line-height: 65px;
    text-align: center;
    margin-bottom: 10px;
    @media only screen and (max-width:780px) {
      width: 90%;
      font-size: 45px;
      line-height: 50px;
    }
  }
  .snippet{
    width: 501px;
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    color: #C8C8C8;
    text-align: center;
    margin-bottom: 33px;
    @media only screen and (max-width:780px) {
      width: 80%;
      font-size: 18px;
      line-height: 20px;
    }
  }
  .governance-btn{
    border: none;
    outline: none;
    width: 190px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(95.34deg, #09976E -21.44%, #084F65 108.23%);
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    a{
      text-decoration: none;
      color: #ffff;
    }
  }
}
.faas-saas{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 92px 71px 42px 71px;
  background: #020A08;
  background-image: linear-gradient(180deg, rgba(2, 10, 8, 0.75),rgba(2, 10, 8, 0.75));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width:780px) {
    padding: 42px 10px;
  }
  overflow: hidden;

  -webkit-perspective: 240px;
  perspective: 240px;
  .bg{
    background-image: linear-gradient(180deg, rgba(2, 10, 8, 0.75),rgba(2, 10, 8, 0.75));
    position: absolute;
    top: -70px;
    left: -100px;
    width: 120%;
    min-height: 160%;

    -webkit-transform: rotateX(20deg);
    -webkit-perspective-origin: center;
    -webkit-animation: moveSquare 15s infinite ease-in-out alternate;
    animation: moveSquare 15s infinite ease-in-out alternate;
  }

  @keyframes moveSquare {
    0% {
      -webkit-transform:translateX(100px) translateY(-70px) rotateX(0deg);
      transform:translateX(100px) translateY(-70px) rotateX(0deg);
      opacity: 1;
    }
    50% {
      -webkit-transform: translateX(0px) translateY(0px) rotateX(20deg);
      transform: translateX(0px) translateY(0px) rotateX(20deg);
      opacity: .2;
    }
    100% {
      -webkit-transform:translateX(100px) translateY(-70px) rotateX(0deg);
      transform:translateX(100px) translateY(-70px) rotateX(0deg);
      opacity: 1;
    }
  }

  .heading{
    z-index: 1;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    @media only screen and (max-width:780px) {
      font-size: 36px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  .snippet{
    z-index: 1;
    width: 641px;
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    color: #C8C8C8;
    text-align: center;
    @media only screen and (max-width:780px) {
      font-size: 16px;
      line-height: 20px;
      width: 60%;
    }
  }
}

</style>
