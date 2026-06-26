# Notification System Design

## Priority Logic

Notifications are prioritised using:

Placement > Result > Event

If two notifications have the same priority, the latest notification is shown first.

## Data Structure

A Priority Queue (Max Heap) is suitable because:

- Fast insertion
- Fast removal
- Always keeps highest priority at top

Time Complexity

Insertion: O(log n)

Removal: O(log n)

Peek: O(1)

## Handling New Notifications

Whenever a new notification arrives:

1. Assign priority
2. Insert into priority queue
3. Remove lowest priority notification if size exceeds limit

## API

GET /notifications

Authorization using Bearer Token

## Frontend

React + Vite

Material UI

Fetch API

## Logging

Logging middleware is integrated for every API request.

## Future Improvements

- Real-time updates
- Search
- Pagination
- Filtering
- Mark as Read
