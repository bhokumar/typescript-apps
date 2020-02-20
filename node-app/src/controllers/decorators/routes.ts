import 'reflect-metadata';
import {Methods} from './methods';
import {MetaDataKeys} from './MetaDataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler
}

function routeBinder(method: string) {
    return function (path: String) {
        return function(target: any, key: string, desc: RouteHandlerDescriptor) {
            Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
