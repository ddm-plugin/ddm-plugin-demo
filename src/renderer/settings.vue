<template>
    <el-form label-position="left" label-width="100px" ref="form"  >
      <el-form-item :label="this.$pluginT('timeout')" >
        <el-input-number v-model="timeout" :min="100" :max="10000" ></el-input-number>
      </el-form-item>
    </el-form>
  </template>
  
  <script>
  
  
  export default {
    data() {
      return {
        timeout: 200,
      }
    },
    async created() {
      this.timeout = await this.getPluginProperty("timeout") || 200;
    },
    methods: {
      getPluginSettings() {
        return {
            timeout: this.timeout,
        }
      }
    }
  
  }
  </script>
  
  <style>
  .settingsContainer {
    padding-left: 15px;
    background-color: white;
    border-radius: 5px;
  }
  </style>