/*
 * File: app/model/ContactModel.js
 *
 * This file was generated by Sencha Architect version 4.1.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ContactTest.model.ContactModel', {
    extend: 'Ext.data.Model',
    alias: 'model.contactmodel',

    requires: [
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'string',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            name: 'identification'
        },
        {
            name: 'email'
        },
        {
            name: 'phonePrimary'
        },
        {
            name: 'phoneSecondary'
        },
        {
            name: 'fax'
        },
        {
            name: 'mobile'
        },
        {
            name: 'observations'
        },
        {
            name: 'address'
        },
        {
            name: 'type'
        },
        {
            name: 'seller'
        },
        {
            name: 'term'
        },
        {
            name: 'priceList'
        },
        {
            name: 'internalContacts'
        }
    ]
});