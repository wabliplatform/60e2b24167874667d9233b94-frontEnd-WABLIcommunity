/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Municipality from '../model/Municipality';

/**
* Municipality service.
* @module api/MunicipalityApi
* @version 1.0.0
*/
export default class MunicipalityApi {

    /**
    * Constructs a new MunicipalityApi. 
    * @alias module:api/MunicipalityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createmunicipality operation.
     * @callback module:api/MunicipalityApi~createmunicipalityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Municipality} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Municipality} municipality data to be created
     * @param {module:api/MunicipalityApi~createmunicipalityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Municipality}
     */
    createmunicipality(municipality, callback) {
      let postBody = municipality;
      // verify the required parameter 'municipality' is set
      if (municipality === undefined || municipality === null) {
        throw new Error("Missing the required parameter 'municipality' when calling createmunicipality");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Municipality;
      return this.apiClient.callApi(
        '/municipality', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletemunicipality operation.
     * @callback module:api/MunicipalityApi~deletemunicipalityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} municipalityId the Id parameter
     * @param {module:api/MunicipalityApi~deletemunicipalityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletemunicipality(municipalityId, callback) {
      let postBody = null;
      // verify the required parameter 'municipalityId' is set
      if (municipalityId === undefined || municipalityId === null) {
        throw new Error("Missing the required parameter 'municipalityId' when calling deletemunicipality");
      }

      let pathParams = {
        'municipalityId': municipalityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/municipality/{municipalityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllmunicipality operation.
     * @callback module:api/MunicipalityApi~getAllmunicipalityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Municipality>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/MunicipalityApi~getAllmunicipalityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Municipality>}
     */
    getAllmunicipality(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Municipality];
      return this.apiClient.callApi(
        '/municipality/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamsmunicipality operation.
     * @callback module:api/MunicipalityApi~getByParamsmunicipalityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Municipality>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} attribute the attribute based on which the search is performed
     * @param {String} value the value parameter based on which the search is performed
     * @param {module:api/MunicipalityApi~getByParamsmunicipalityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Municipality>}
     */
    getByParamsmunicipality(attribute, value, callback) {
      let postBody = null;
      // verify the required parameter 'attribute' is set
      if (attribute === undefined || attribute === null) {
        throw new Error("Missing the required parameter 'attribute' when calling getByParamsmunicipality");
      }
      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling getByParamsmunicipality");
      }

      let pathParams = {
        'attribute': attribute,
        'value': value
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Municipality];
      return this.apiClient.callApi(
        '/municipality/getByParams/{attribute}/{value}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getmunicipality operation.
     * @callback module:api/MunicipalityApi~getmunicipalityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Municipality} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} municipalityId the Id parameter
     * @param {module:api/MunicipalityApi~getmunicipalityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Municipality}
     */
    getmunicipality(municipalityId, callback) {
      let postBody = null;
      // verify the required parameter 'municipalityId' is set
      if (municipalityId === undefined || municipalityId === null) {
        throw new Error("Missing the required parameter 'municipalityId' when calling getmunicipality");
      }

      let pathParams = {
        'municipalityId': municipalityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Municipality;
      return this.apiClient.callApi(
        '/municipality/{municipalityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatemunicipality operation.
     * @callback module:api/MunicipalityApi~updatemunicipalityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Municipality} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} municipalityId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Municipality} opts.municipality data to be updated
     * @param {module:api/MunicipalityApi~updatemunicipalityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Municipality}
     */
    updatemunicipality(municipalityId, opts, callback) {
      opts = opts || {};
      let postBody = opts['municipality'];
      // verify the required parameter 'municipalityId' is set
      if (municipalityId === undefined || municipalityId === null) {
        throw new Error("Missing the required parameter 'municipalityId' when calling updatemunicipality");
      }

      let pathParams = {
        'municipalityId': municipalityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Municipality;
      return this.apiClient.callApi(
        '/municipality/{municipalityId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
