from fastapi import APIRouter
from app.models.schemas import ContactRequest, ContactResponse

router = APIRouter()


@router.get("/test")
def test_api():
    return {
        "message": "Frontend and backend are connected!"
    }


@router.post("/contact", response_model=ContactResponse)
def contact(data: ContactRequest):
    print("Received:", data)

    return ContactResponse(
        success=True,
        message=f"Thanks {data.name}, we received your message."
    )
