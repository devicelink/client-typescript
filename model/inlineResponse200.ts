/**
 * 
 * Manages devices through Devicelink. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InlineResponse200Values } from './inlineResponse200Values';


export interface InlineResponse200 { 
    status?: InlineResponse200.StatusEnum;
    ack?: number;
    _do?: number;
    values?: InlineResponse200Values;
}
export namespace InlineResponse200 {
    export type StatusEnum = 'acked' | 'unknown';
    export const StatusEnum = {
        Acked: 'acked' as StatusEnum,
        Unknown: 'unknown' as StatusEnum
    };
}
