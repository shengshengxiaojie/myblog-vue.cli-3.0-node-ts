/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:39:13
 * Description : 
 * -----
 * Last Modified: 2019-01-09 10:50:46
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import model from '../model/article';
import {ACTICLE_DETAILS} from '../interface/article';
class service {
    constructor(){

    };
    async addArticle(data:ACTICLE_DETAILS){
        const result = await model.insertArticle(data);
        return result;
    };
};
export default new service();