import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Zeep
 * @description
 * This plugin does something
 *
 * @usage
 * typescript
 * import { Zeep } from '@ionic-native/zeep/ngx';
 *
 *
 * constructor(private zeep: Zeep) { }
 *
 * ...
 *
 * let configZip = {
 *      from: sourceUrl,
 *      to: destZip,
 *      password: PassZip
 *   }
 *
 * this.zeep.zip(configZip)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * let configUnZip = {
 *      from: sourceZip,
 *      to: destUrl,
 *      password: PassZip
 *   }
 * this.zeep.unzip(configUnZip)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 */
export declare class ZeepOriginal extends IonicNativePlugin {
    /**
    * Extracts files from a ZIP archive
    * @param sourceUrl {string} Source ZIP file
    * @param destZip {string} Destination folder
    * @param sourceZip {string} Source ZIP file
    * @param destUrl {string} Destination folder
    * @param PassZip {String} Password Zip
    * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
    */
    zip(config: {
        [s: string]: any;
    }): Promise<any>;
    unzip(config: {
        [s: string]: any;
    }): Promise<any>;
}

export declare const Zeep: ZeepOriginal;