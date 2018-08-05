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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Body } from '../model/body';
import { Body1 } from '../model/body1';
import { Body2 } from '../model/body2';
import { DeviceData } from '../model/deviceData';
import { GroupInfo } from '../model/groupInfo';
import { InlineResponse200 } from '../model/inlineResponse200';
import { InlineResponse201 } from '../model/inlineResponse201';
import { InlineResponse2011 } from '../model/inlineResponse2011';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'http://localhost/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Adds device to group.
     * Adds a device to a group.
     * @param groupId uuid of group
     * @param id uuid of device
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkAddDeviceToGroup(groupId: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public devicelinkAddDeviceToGroup(groupId: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public devicelinkAddDeviceToGroup(groupId: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public devicelinkAddDeviceToGroup(groupId: string, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling devicelinkAddDeviceToGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkAddDeviceToGroup.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.put<any>(`${this.configuration.basePath}/v1/groups/${encodeURIComponent(String(groupId))}/device/${encodeURIComponent(String(id))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a device group.
     * Creates virtual group for devices. Request can include list of devices as request-body or attributes.
     * @param body List of devices
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkCreateGroup(body?: Body, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    public devicelinkCreateGroup(body?: Body, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    public devicelinkCreateGroup(body?: Body, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    public devicelinkCreateGroup(body?: Body, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<InlineResponse201>(`${this.configuration.basePath}/v1/groups`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a group.
     * Deletes group and its metadata.
     * @param id uuid of group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkDeleteGroup(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public devicelinkDeleteGroup(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public devicelinkDeleteGroup(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public devicelinkDeleteGroup(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkDeleteGroup.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/v1/groups/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Prompts a device action.
     * Prompts an action on a device.
     * @param id uuid of device
     * @param body2 Action that shall be executed
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkDoAction(id: string, body2: Body2, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2011>;
    public devicelinkDoAction(id: string, body2: Body2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2011>>;
    public devicelinkDoAction(id: string, body2: Body2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2011>>;
    public devicelinkDoAction(id: string, body2: Body2, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkDoAction.');
        }
        if (body2 === null || body2 === undefined) {
            throw new Error('Required parameter body2 was null or undefined when calling devicelinkDoAction.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<InlineResponse2011>(`${this.configuration.basePath}/v1/device/${encodeURIComponent(String(id))}/actions`,
            body2,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets device actions.
     * Returns device actions within a time range.
     * @param id uuid of device
     * @param from Range start in seconds since epoch
     * @param to Range end in seconds since epoch
     * @param start The start key of the first action object to return,
     * @param sort If set to asc (default), action objects are returned in time ascending order (i.e. starting with from or start and ending with stop). If set to desc, action objects are returned in time descending order (i.e. starting with to or start and ending with from).
     * @param count Limits the number of returned action objects
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkGetActions(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public devicelinkGetActions(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public devicelinkGetActions(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public devicelinkGetActions(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkGetActions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (start !== undefined && start !== null) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }
        if (count !== undefined && count !== null) {
            queryParameters = queryParameters.set('count', <any>count);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.configuration.basePath}/v1/device/${encodeURIComponent(String(id))}/actions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets device properties.
     * Returns properties for a device.
     * @param id uuid of device
     * @param from Start time in seconds since epoch
     * @param to End time in seconds since epoch
     * @param start The start key of the first property object to return
     * @param sort Order in which roperty objects are returned
     * @param count Limits the number of returned property objects
     * @param propertyKey Filters returned property objects by property-key
     * @param index Filters returned property objects by property-index (can only be used in combination with property-key parameter)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkGetData(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, propertyKey?: number, index?: number, observe?: 'body', reportProgress?: boolean): Observable<DeviceData>;
    public devicelinkGetData(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, propertyKey?: number, index?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeviceData>>;
    public devicelinkGetData(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, propertyKey?: number, index?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeviceData>>;
    public devicelinkGetData(id: string, from?: number, to?: number, start?: number, sort?: 'asc' | 'desc', count?: number, propertyKey?: number, index?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkGetData.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (start !== undefined && start !== null) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }
        if (count !== undefined && count !== null) {
            queryParameters = queryParameters.set('count', <any>count);
        }
        if (propertyKey !== undefined && propertyKey !== null) {
            queryParameters = queryParameters.set('property-key', <any>propertyKey);
        }
        if (index !== undefined && index !== null) {
            queryParameters = queryParameters.set('index', <any>index);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<DeviceData>(`${this.configuration.basePath}/v1/device/${encodeURIComponent(String(id))}/properties`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets device events.
     * Opens event-stream for a device.
     * @param id uuid of device
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkGetDeviceEvent(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public devicelinkGetDeviceEvent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public devicelinkGetDeviceEvent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public devicelinkGetDeviceEvent(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkGetDeviceEvent.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/event-stream'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.configuration.basePath}/v1/device/${encodeURIComponent(String(id))}/events`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a device group.
     * Returns a group, members, and metadata.
     * @param id uuid of group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkGetGroupInfo(id: string, observe?: 'body', reportProgress?: boolean): Observable<GroupInfo>;
    public devicelinkGetGroupInfo(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupInfo>>;
    public devicelinkGetGroupInfo(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupInfo>>;
    public devicelinkGetGroupInfo(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkGetGroupInfo.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<GroupInfo>(`${this.configuration.basePath}/v1/groups/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets device groups.
     * Returns all groups with devices and metadata.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkGetGroups(observe?: 'body', reportProgress?: boolean): Observable<GroupInfo>;
    public devicelinkGetGroups(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupInfo>>;
    public devicelinkGetGroups(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupInfo>>;
    public devicelinkGetGroups(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<GroupInfo>(`${this.configuration.basePath}/v1/groups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a device action.
     * Returns a action of device.
     * @param id uuid of device
     * @param actionId Action key
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkGetSpecificAction(id: string, actionId: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public devicelinkGetSpecificAction(id: string, actionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public devicelinkGetSpecificAction(id: string, actionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public devicelinkGetSpecificAction(id: string, actionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkGetSpecificAction.');
        }
        if (actionId === null || actionId === undefined) {
            throw new Error('Required parameter actionId was null or undefined when calling devicelinkGetSpecificAction.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.configuration.basePath}/v1/device/${encodeURIComponent(String(id))}/actions/${encodeURIComponent(String(actionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes device from a group.
     * Removes a device from a group.
     * @param id2 uuid of group
     * @param id uuid of device
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkRemoveDeviceFromGroup(id2: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public devicelinkRemoveDeviceFromGroup(id2: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public devicelinkRemoveDeviceFromGroup(id2: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public devicelinkRemoveDeviceFromGroup(id2: string, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id2 === null || id2 === undefined) {
            throw new Error('Required parameter id2 was null or undefined when calling devicelinkRemoveDeviceFromGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkRemoveDeviceFromGroup.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/v1/groups/${encodeURIComponent(String(groupId))}/device/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates group information.
     * Updates group metadata.
     * @param id uuid of group
     * @param body1 New metadata of group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public devicelinkUpdateGroupMetadata(id: string, body1?: Body1, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public devicelinkUpdateGroupMetadata(id: string, body1?: Body1, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public devicelinkUpdateGroupMetadata(id: string, body1?: Body1, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public devicelinkUpdateGroupMetadata(id: string, body1?: Body1, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling devicelinkUpdateGroupMetadata.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/v1/groups/${encodeURIComponent(String(id))}`,
            body1,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
