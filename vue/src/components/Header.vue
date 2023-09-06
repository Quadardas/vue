<template>
  <div class="header">
    <div class="logo">LOGO</div>
    <div class="header__list">
      <ul>
        <li class="header__link">
          <router-link to="/catalog">Catalog</router-link>
        </li>
        <li class="header__link">Cart</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: grey;
  margin: 0;
  display: flex;
  flex-direction: row;

  .logo {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .header__list {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;

      .header__link {
        margin: 0 20px;

        a {
          color: rgba(255, 255, 255, 0.87);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
