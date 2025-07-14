import json

def extract_endpoints_from_swagger_data(swagger_data):
    paths = swagger_data.get("paths", {})
    if not paths:
        print("No endpoints found in Swagger file.")
        return []

    print("✅ Extracted Endpoints:\n")
    endpoints = []

    for endpoint, methods in paths.items():
        print(f"📌 Endpoint: {endpoint}")
        for method, details in methods.items():
            summary = details.get("summary", "")
            description = details.get("description", "")
            print(f"  └ Method: {method.upper()}")
            print(f"     Summary: {summary}")
            print(f"     Description: {description}")
            request_body = details.get("requestBody", {})
            if request_body:
                content = request_body.get("content", {})
                json_schema = content.get("application/json", {}).get("schema", {})
                required_fields = json_schema.get("required", [])
                props = json_schema.get("properties", {})
                print("     Required fields:")
                for field in required_fields:
                    field_info = props.get(field, {})
                    field_type = field_info.get("type", "unknown")
                    print(f"       - {field}: {field_type}")
            else:
                print("     No request body required.")

            # اضافه کردن اطلاعات برای بازگشت
            endpoints.append({
                "path": endpoint,
                "method": method.upper(),
                "summary": summary,
                "description": description
            })


        print("")
    
    return endpoints

