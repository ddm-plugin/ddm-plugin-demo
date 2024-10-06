const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require
// const fs = requireFunc('fs');
// const fs = require('fs');
import fs from 'fs';
import os from 'os';
import pkg from '../../package.json';


export default (app) => {
    return {
        install() {
            
        },

        uninstall() {}
    };

}