// abbreviations

/*

ij-desc-l : innerJoin-description-line
ij-

*/

export const innerJoinData: {
    name: string,
    description: {
        key: string;
        value: string;
    }[];
    syntax: {
        key: string;
        value: string;
    }[];
    synonyms?: string;
} = {
    name: "Inner join",
    description: [
        {
            key: "ij-desc-l0",
            value:
                "An inner join, in the context of relational databases and SQL (Structured Query Language), is a query operation that combines data from two or more tables based on a specified condition or common column values.",
        },
        {
            key: "ij-desc-l1",
            value:
                "It retrieves only the rows for which there is a match between the columns being joined in the participating tables.",
        },
        {
            key: "ij-desc-l2",
            value:
                "In other words, an inner join returns a result set containing only the records that have corresponding values in both tables, effectively filtering out non-matching rows.",
        },
        {
            key: "ij-desc-l3",
            value:
                "This operation is used to extract and consolidate data that has shared characteristics or relationships between multiple tables, making it a fundamental tool for data retrieval and analysis in relational database systems.",
        },
    ],
    syntax: [
        {
            key: "ij-stx-l0",
            value: "SELECT",
        },
        {
            key: "ij-stx-l1",
            value: "column1, column2, ...",
        },
        {
            key: "ij-stx-l2",
            value: "FROM",
        },
        {
            key: "ij-stx-l3",
            value: "table1 INNER JOIN table2",
        },
        {
            key: "ij-stx-l4",
            value: "ON",
        },
        {
            key: "ij-stx-l5",
            value: "table1.column_name = table2.column_name;",
        },
    ],
    synonyms: "(equijoin , join)",
};
