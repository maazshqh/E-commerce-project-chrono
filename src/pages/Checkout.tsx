import { useState } from "react";
import { Minus, Plus, CreditCard, Check } from "lucide-react";
import { motion } from "framer-motion";
import CheckoutHeader from "../components/header/CheckoutHeader";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import heroImage from "@/assets/hero.png";

// Scrolling text component
const ScrollingText = ({ direction = 'left' }: { direction?: 'left' | 'right' }) => {
  const texts = [
    "SECURE CHECKOUT",
    "FREE SHIPPING",
    "5 YEAR WARRANTY",
    "PREMIUM QUALITY",
    "SATISFACTION GUARANTEED",
    "24/7 SUPPORT",
  ];
  
  const duplicatedTexts = [...texts, ...texts, ...texts];
  
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ 
          x: direction === 'left' ? [0, -33.33 + '%'] : [-33.33 + '%', 0] 
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="inline-flex"
      >
        {duplicatedTexts.map((text, index) => (
          <span 
            key={index} 
            className="mx-8 text-[10vw] sm:text-[8vw] font-light text-foreground/[0.03] whitespace-nowrap"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Checkout = () => {
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
  });
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const [hasSeparateBilling, setHasSeparateBilling] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const [shippingOption, setShippingOption] = useState("standard");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Watch Pro Series",
      price: "₹12,999",
      quantity: 1,
      image: heroImage,
      size: "45mm"
    },
    {
      id: 2,
      name: "Watch Elite Edition", 
      price: "₹18,999",
      quantity: 1,
      image: heroImage
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  const getShippingCost = () => {
    switch (shippingOption) {
      case "express":
        return 15;
      case "overnight":
        return 35;
      default:
        return 0;
    }
  };
  
  const shipping = getShippingCost();
  const total = subtotal + shipping;

  const handleDiscountSubmit = () => {
    console.log("Discount code submitted:", discountCode);
    setShowDiscountInput(false);
  };

  const handleCustomerDetailsChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleShippingAddressChange = (field: string, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleBillingDetailsChange = (field: string, value: string) => {
    setBillingDetails(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentDetailsChange = (field: string, value: string) => {
    setPaymentDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteOrder = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setPaymentComplete(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Text - Two rows moving in opposite directions */}
      <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-center gap-4 opacity-100">
        <ScrollingText direction="left" />
        <ScrollingText direction="right" />
      </div>

      <div className="relative z-10">
        <CheckoutHeader />
        
        <main className="pt-6 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Order Summary */}
              <div className="lg:col-span-1 lg:order-2">
                <div className="bg-background/80 backdrop-blur-sm border border-border p-8 sticky top-6">
                  <h2 className="text-lg font-light text-foreground mb-6">Order Summary</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 bg-muted overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-light text-foreground">{item.name}</h3>
                          {item.size && (
                            <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                          )}
                          
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0 rounded-none border-border"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium text-foreground min-w-[2ch] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0 rounded-none border-border"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-foreground font-medium">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Discount Code */}
                  <div className="mt-8 pt-6 border-t border-border">
                    {!showDiscountInput ? (
                      <button 
                        onClick={() => setShowDiscountInput(true)}
                        className="text-sm text-foreground underline hover:no-underline transition-all"
                      >
                        Discount code
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <Input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Enter discount code"
                            className="flex-1 rounded-none"
                          />
                          <button 
                            onClick={handleDiscountSubmit}
                            className="text-sm text-foreground underline hover:no-underline transition-all px-2"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border mt-4 pt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">€{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">{shipping === 0 ? 'Free' : `€${shipping}`}</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium pt-3 border-t border-border">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">€{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forms */}
              <div className="lg:col-span-2 lg:order-1 space-y-8">

                {/* Customer Details */}
                <div className="bg-background/80 backdrop-blur-sm border border-border p-8">
                  <h2 className="text-lg font-light text-foreground mb-6">Customer Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-light text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerDetails.email}
                        onChange={(e) => handleCustomerDetailsChange("email", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-light text-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={customerDetails.firstName}
                          onChange={(e) => handleCustomerDetailsChange("firstName", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-light text-foreground">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={customerDetails.lastName}
                          onChange={(e) => handleCustomerDetailsChange("lastName", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-light text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={customerDetails.phone}
                        onChange={(e) => handleCustomerDetailsChange("phone", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Shipping Address */}
                    <div className="border-t border-border pt-6 mt-8">
                      <h3 className="text-base font-light text-foreground mb-4">Shipping Address</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="shippingAddress" className="text-sm font-light text-foreground">
                            Address *
                          </Label>
                          <Input
                            id="shippingAddress"
                            type="text"
                            value={shippingAddress.address}
                            onChange={(e) => handleShippingAddressChange("address", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Street address"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="shippingCity" className="text-sm font-light text-foreground">
                              City *
                            </Label>
                            <Input
                              id="shippingCity"
                              type="text"
                              value={shippingAddress.city}
                              onChange={(e) => handleShippingAddressChange("city", e.target.value)}
                              className="mt-2 rounded-none"
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <Label htmlFor="shippingPostalCode" className="text-sm font-light text-foreground">
                              Postal Code *
                            </Label>
                            <Input
                              id="shippingPostalCode"
                              type="text"
                              value={shippingAddress.postalCode}
                              onChange={(e) => handleShippingAddressChange("postalCode", e.target.value)}
                              className="mt-2 rounded-none"
                              placeholder="Postal code"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="shippingCountry" className="text-sm font-light text-foreground">
                            Country *
                          </Label>
                          <Input
                            id="shippingCountry"
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) => handleShippingAddressChange("country", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Checkbox */}
                    <div className="border-t border-border pt-6 mt-8">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="separateBilling"
                          checked={hasSeparateBilling}
                          onCheckedChange={(checked) => setHasSeparateBilling(checked === true)}
                        />
                        <Label 
                          htmlFor="separateBilling" 
                          className="text-sm font-light text-foreground cursor-pointer"
                        >
                          Other billing address
                        </Label>
                      </div>
                    </div>

                    {hasSeparateBilling && (
                      <div className="space-y-6 pt-4">
                        <h3 className="text-base font-light text-foreground">Billing Details</h3>
                        
                        <div>
                          <Label htmlFor="billingEmail" className="text-sm font-light text-foreground">
                            Email Address *
                          </Label>
                          <Input
                            id="billingEmail"
                            type="email"
                            value={billingDetails.email}
                            onChange={(e) => handleBillingDetailsChange("email", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Enter billing email"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingFirstName" className="text-sm font-light text-foreground">
                              First Name *
                            </Label>
                            <Input
                              id="billingFirstName"
                              type="text"
                              value={billingDetails.firstName}
                              onChange={(e) => handleBillingDetailsChange("firstName", e.target.value)}
                              className="mt-2 rounded-none"
                              placeholder="First name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="billingLastName" className="text-sm font-light text-foreground">
                              Last Name *
                            </Label>
                            <Input
                              id="billingLastName"
                              type="text"
                              value={billingDetails.lastName}
                              onChange={(e) => handleBillingDetailsChange("lastName", e.target.value)}
                              className="mt-2 rounded-none"
                              placeholder="Last name"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="billingAddress" className="text-sm font-light text-foreground">
                            Address *
                          </Label>
                          <Input
                            id="billingAddress"
                            type="text"
                            value={billingDetails.address}
                            onChange={(e) => handleBillingDetailsChange("address", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Street address"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingCity" className="text-sm font-light text-foreground">
                              City *
                            </Label>
                            <Input
                              id="billingCity"
                              type="text"
                              value={billingDetails.city}
                              onChange={(e) => handleBillingDetailsChange("city", e.target.value)}
                              className="mt-2 rounded-none"
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <Label htmlFor="billingPostalCode" className="text-sm font-light text-foreground">
                              Postal Code *
                            </Label>
                            <Input
                              id="billingPostalCode"
                              type="text"
                              value={billingDetails.postalCode}
                              onChange={(e) => handleBillingDetailsChange("postalCode", e.target.value)}
                              className="mt-2 rounded-none"
                              placeholder="Postal code"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="billingCountry" className="text-sm font-light text-foreground">
                            Country *
                          </Label>
                          <Input
                            id="billingCountry"
                            type="text"
                            value={billingDetails.country}
                            onChange={(e) => handleBillingDetailsChange("country", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipping Options */}
                <div className="bg-background/80 backdrop-blur-sm border border-border p-8">
                  <h2 className="text-lg font-light text-foreground mb-6">Shipping Method</h2>
                  
                  <RadioGroup value={shippingOption} onValueChange={setShippingOption}>
                    <div className="space-y-4">
                      {[
                        { value: 'standard', label: 'Standard Shipping', desc: '5-7 business days', price: 'Free' },
                        { value: 'express', label: 'Express Shipping', desc: '2-3 business days', price: '€15' },
                        { value: 'overnight', label: 'Overnight Shipping', desc: 'Next business day', price: '€35' },
                      ].map((option) => (
                        <div 
                          key={option.value}
                          className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                            shippingOption === option.value ? 'border-foreground bg-secondary/50' : 'border-border hover:border-foreground/50'
                          }`}
                          onClick={() => setShippingOption(option.value)}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <div>
                              <Label htmlFor={option.value} className="font-light cursor-pointer">
                                {option.label}
                              </Label>
                              <p className="text-sm text-muted-foreground">{option.desc}</p>
                            </div>
                          </div>
                          <span className="text-foreground font-medium">{option.price}</span>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Payment */}
                <div className="bg-background/80 backdrop-blur-sm border border-border p-8">
                  <h2 className="text-lg font-light text-foreground mb-6">Payment</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="cardholderName" className="text-sm font-light text-foreground">
                        Cardholder Name *
                      </Label>
                      <Input
                        id="cardholderName"
                        type="text"
                        value={paymentDetails.cardholderName}
                        onChange={(e) => handlePaymentDetailsChange("cardholderName", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="Name on card"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber" className="text-sm font-light text-foreground">
                        Card Number *
                      </Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        value={paymentDetails.cardNumber}
                        onChange={(e) => handlePaymentDetailsChange("cardNumber", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate" className="text-sm font-light text-foreground">
                          Expiry Date *
                        </Label>
                        <Input
                          id="expiryDate"
                          type="text"
                          value={paymentDetails.expiryDate}
                          onChange={(e) => handlePaymentDetailsChange("expiryDate", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-sm font-light text-foreground">
                          CVV *
                        </Label>
                        <Input
                          id="cvv"
                          type="text"
                          value={paymentDetails.cvv}
                          onChange={(e) => handlePaymentDetailsChange("cvv", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleCompleteOrder}
                    disabled={isProcessing || paymentComplete}
                    className="w-full h-14 mt-8 rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                        />
                        Processing...
                      </span>
                    ) : paymentComplete ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Order Complete
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Pay €{total.toLocaleString()}
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;