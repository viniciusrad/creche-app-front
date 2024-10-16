{
    "rewrites": [
        { "source": "/models/*", "destination": "/models/:splat" }
    ],
        "headers": [
            {
                "source": "/models/*",
                "headers": [
                    { "key": "Content-Type", "value": "application/json" }
                ]
            }
        ]
}
