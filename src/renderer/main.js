const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require
// const fs = requireFunc('fs');
// const fs = require('fs');
import fs from 'fs';
import os from 'os';
import pkg from '../../package.json';


import settings from "./settings.vue";


export default (appRenderer) => {

    return {
      install() {
        appRenderer.registrySettingComponent("Demo Settings", settings);
        
        appRenderer.on("invokeMethodAfter", async (data) => {
          const result = data.result;
            if(result.elapsedTime > (await appRenderer.getPluginProperty("timeout") || 200)){
                appRenderer.notify({
                  title: `涛子哥的祝福${pkg.version}`, 
                  body: '成功不是目的，主要是享受其过程!!!!!+++111++++++ ' + result.elapsedTime,
                });
            }

            console.log('[DDM INFO]:register：, os.version:' + os.version) 
                // console.log('afterInvoke拿到了结果：', result);
            result.data = '此路是我开，此树是我栽，要想拿到结果，叫我涛子哥哥！';
        });
      },
  
      uninstall() {}
    }
  };
  