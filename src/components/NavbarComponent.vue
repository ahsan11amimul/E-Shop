<template>
  <nav class="navbar navbar-expand-lg app-header">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-list"></i>
      </a>
      <a class="navbar-brand" href="#">E-Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div class="search-box">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search Products.." >
              <span class="input-group-text" id="basic-addon2">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </div>
         </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "NavbarComponent"
}
</script>

<style scoped>

</style>