---
sidebar_position: 6
title: API Reference
---

# ReviewStream API Reference

This document outlines the available API endpoints for accessing data in your ReviewStream account.

All API requests require authentication via a Bearer token.

---

## Authentication

All endpoints require an authenticated request with a valid JWT.

**Header format:**

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## Endpoints

### `GET /reviews`

Fetch a list of reviews submitted to your account.

-   **URL:** `https://api.reviewstream.ai/api/reviews`
-   **Method:** `GET`
-   **Authentication:** Required

#### Success Response

```json
[
    {
        "id": "65e7f88b91d3b3adf22a231c",
        "account": "65e7f76f91d3b3adf22a230a",
        "agreeToTerms": true,
        "orderNumber": "123456",
        "surveyId": "65e7f88b91d3b3adf22a230d",
        "surveyName": "Product Feedback",
        "itemId": "65e7f88b91d3b3adf22a230e",
        "itemName": "Bluetooth Speaker",
        "giveawayId": null,
        "giveawayName": null,
        "rating": 5,
        "review": "Fantastic product!",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "jane@example.com",
        "phone": "123-456-7890",
        "address1": "123 Main St",
        "address2": "",
        "city": "Seattle",
        "state": "WA",
        "zip": "98101",
        "couponCode": "WELCOME10",
        "pictureUrl": null,
        "videoUrl": null,
        "landingPageType": "default",
        "createdAt": "2024-03-01T12:00:00.000Z",
        "updatedAt": "2024-03-01T12:05:00.000Z"
    }
]
```

### `GET /surveys`

Fetch a list of reviews submitted to your account.

-   **URL:** `https://api.reviewstream.ai/api/surveys`
-   **Method:** `GET`
-   **Authentication:** Required

#### Success Response

```json
{
    "surveys": [
        {
            "_id": "65e7f88b91d3b3adf22a230d",
            "surveyName": "Product Feedback"
        },
        {
            "_id": "65e7f88b91d3b3adf22a230e",
            "surveyName": "Customer Experience"
        }
    ]
}
```
