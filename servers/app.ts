/**
 * FileName    : app.ts
 * ProjectName : item5
 * Author      : terrorblade
 * Created Date: 2019-01-08 14:39:23
 * Description : 
 * -----
 * Last Modified: 2019-01-09 09:46:36
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as koa from 'koa';
import * as path from 'path';
import * as jsonBody from 'koa-json';
import * as koaRouter from 'koa-router';
import * as kosLogger from 'koa-logger';
import * as koaStatic from 'koa-static';
import * as bodyparser from 'koa-bodyparser';
import logger from './lib/logger';
import commonRouter from './server/router/common';
import blogRouter from './server/router/blog';
import wechatRouter from './server/router/wechat';
import historyApiFallback from './middleware/historyFillback';

class app {
    public koa:koa.Application;
    constructor(){
        this.koa = new koa();
        this.middleware();
        this.router();
        this.onerror();
    };
    private middleware():void{
        this.koa.use(historyApiFallback());//vue打包的history模式
        this.koa.use(koaStatic(path.join(__dirname,'./public')));//静态容器
        this.koa.use(kosLogger());//日志
        this.koa.use(jsonBody());//json解析
        this.koa.use(bodyparser({
            enableTypes:['json', 'form', 'text'],
            onerror(err:any, ctx:any) {
                logger.logRes(ctx,JSON.stringify(err));
                ctx.throw('body parse error', 422);
            }
        }));
    };
    private router():void{
        this.koa.use(commonRouter.routes()).use(commonRouter.allowedMethods());//公共路由
        this.koa.use(blogRouter.routes()).use(blogRouter.allowedMethods());//博客路由
        this.koa.use(wechatRouter.routes()).use(wechatRouter.allowedMethods());//wechat路由
    };
    private onerror():void{//报错
        process.on('uncaughtException', (err:any):void=>{
            console.error(JSON.stringify(err.stack));
            logger.logError(JSON.stringify(err.stack),'uncaughtException');
        });
    };
}

export default new app().koa
