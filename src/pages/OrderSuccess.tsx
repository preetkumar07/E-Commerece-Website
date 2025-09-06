import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Mail, ShoppingBag } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    document.title = "Order Confirmed - LuxeStore";
    
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="font-semibold">#{orderData.orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Items</p>
                  <p className="font-semibold">{orderData.items} item{orderData.items !== 1 ? 's' : ''}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="font-semibold">${orderData.total.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-700">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">
                    A confirmation email has been sent to your email address.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Download Receipt</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a PDF copy of your receipt for your records.
                </p>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Track Your Order</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You'll receive tracking information once your order ships.
                </p>
                <Button variant="outline" size="sm">
                  Track Order
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/shop')} size="lg">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Continue Shopping
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              size="lg"
            >
              Back to Home
            </Button>
          </div>

          {/* Expected Delivery */}
          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">Expected Delivery</h3>
            <p className="text-muted-foreground">
              Your order will be processed within 24 hours and shipped within 2-3 business days.
              Standard delivery typically takes 5-7 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;