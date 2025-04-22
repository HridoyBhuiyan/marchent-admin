import React, { useState, useMemo } from 'react';
import { Table, FormControl, InputGroup, Pagination } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Merchants(props) {
    const initialData = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alex Johnson', email: 'alex@example.com' },
        { id: 4, name: 'Emily Davis', email: 'emily@example.com' },
        { id: 5, name: 'Michael Brown', email: 'michael@example.com' },
        { id: 6, name: 'Sarah Lee', email: 'sarah@example.com' },
        { id: 7, name: 'David King', email: 'david@example.com' },
        { id: 8, name: 'Laura White', email: 'laura@gmail.com' },
        { id: 9, name: 'James Clark', email: 'james@example.com' },
        { id: 10, name: 'Emma Wilson', email: 'emma@example.com' },
        { id: 11, name: 'Laura White', email: 'laura@gmail.com' },
        { id: 12, name: 'James Clark', email: 'james@example.com' },
        { id: 13, name: 'hridoy', email: 'emma@example.com' },
    ];

    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState('id');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Define how many items per page

    const filteredData = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        let data = initialData.filter(
            item =>
                item.name.toLowerCase().includes(lowerSearch) ||
                item.email.toLowerCase().includes(lowerSearch)
        );

        data.sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        return data;
    }, [search, sortField, sortOrder]);

    // Pagination logic
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleSort = field => {
        if (field === sortField) {
            setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">DashboardPage</h2>}
        >
            <Head title="DashboardPage" />

            <div className="container mt-4">
                <div className="mb-3">
                    <h4>Merchants</h4>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Search</InputGroup.Text>
                        <FormControl
                            placeholder="Search by name or email"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </InputGroup>

                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
                                ID {sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
                            </th>
                            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                                Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                            </th>
                            <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
                                Email {sortField === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {paginatedData.map(merchant => (
                            <tr key={merchant.id}>
                                <td>{merchant.id}</td>
                                <td>{merchant.name}</td>
                                <td>{merchant.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                    <Pagination>
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />
                        {[...Array(totalPages).keys()].map(page => (
                            <Pagination.Item
                                key={page + 1}
                                active={page + 1 === currentPage}
                                onClick={() => handlePageChange(page + 1)}
                            >
                                {page + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Merchants;
