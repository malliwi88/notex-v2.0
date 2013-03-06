Ext.define ('Webed.store.MIMEs', {
    extend: 'Ext.data.Store',
    requires: 'Webed.model.MIME',
    model: 'Webed.model.MIME',

    data: [{
        mime: 'application/root',
        name: 'root',
        icon: 'icon-tree'
    },{
        mime: 'application/folder',
        name: 'Folder',
        icon: 'icon-folder'
    },{
        mime: 'application/project+latex',
        name: 'LaTex Project',
        icon: 'icon-report_latex'
    },{
        mime: 'application/project+rest',
        name: 'ReStructuredTex Project',
        icon: 'icon-report_rest'
    },{
        mime: 'application/project',
        name: 'Generic Project',
        icon: 'icon-report'
    },{
        mime: 'application/json',
        name: 'JSON',
        icon: 'icon-script_code_red',
        flag: {text: true}
    },{
        mime: 'text/x-csrc',
        name: 'C',
        icon: 'icon-script_code'
    },{
        mime: 'text/x-c++src',
        name: 'C++',
        icon: 'icon-script_code'
    },{
        mime: 'text/x-csharp',
        name: 'C#',
        icon: 'icon-script_code'
    },{
        mime: 'text/x-java',
        name: 'Java',
        icon: 'icon-script_code'
    },{
        mime: 'text/javascript',
        name: 'JavaScript',
        icon: 'icon-script_code'
    },{
        mime: 'text/plain',
        name: 'Plain Text',
        icon: 'icon-page'
    },{
        mime: 'text/x-python',
        name: 'Python',
        icon: 'icon-script_code'
    },{
        mime: 'text/x-rst',
        name: 'ReStructuredText',
        icon: 'icon-page'
    },{
        mime: 'text/x-yaml',
        name: 'YAML Configuration',
        icon: 'icon-page'
    },{
        mime: 'text/*',
        name: 'Text',
        icon: 'icon-page'
    },{
        mime: 'image/*',
        name: 'Image',
        icon: 'icon-picture'
    },{
        mime: '*',
        name: 'Document',
        icon: 'icon-page_white'
    }]
});
