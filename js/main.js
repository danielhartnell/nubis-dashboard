/*

Todo:

    - Calculate total number of sites in list
    - Implement simple searching
    - Consider adding pagination for larger lists
    - Link to GitHub
    - Host website on GitHub / Heroku
    - Build and deploy badges should be links to Jenkins jobs

*/

// Search function ideas
function tableSearch() {
    // I do nothing!
}

// Programmatically create our HTML table
function createTable(account, account_name) {
    var element_name = '<td class="mdl-data-table__cell--non-numeric">';
    var tableRow = $('<tr>');

    // Build each table column and row
    tableRow.append($(element_name).html(
        "<a href='" + account["ci_url"] + "'>" + account_name + "</a>"
    ));

    tableRow.append($(element_name).html(
        "<img src='" + account["build_status"] + "'/>"
    ));
    
    tableRow.append($(element_name).html(
        "<img src='" + account["deploy_status"] + "'/>"
    ));
    
    $("#nubis-accounts").append(tableRow);
}

// Retrieve JSON in order to build HTML table rows
$(document).ready(() => {
    $.getJSON( "./accounts.json", (json) => {
        Object.keys(json).forEach((account_name) => {
            account = json[account_name];
            createTable(account, account_name);
        });
    });
});