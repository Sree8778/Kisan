import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, ShieldCheck, Truck } from 'lucide-react';

export default function WhatsAppOrderModal({ item, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [deliveryLocation, setDeliveryLocation] = useState('Guntur, Andhra Pradesh');
  const [paymentMode, setPaymentMode] = useState('cod');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!item) return null;

  const numPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 500;
  const totalPrice = numPrice * quantity;

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hello ${item.sellerName}, I want to buy your listing on Kisan:\n` +
      `Item: ${item.title}\n` +
      `Quantity: ${quantity} (${item.unit})\n` +
      `Total Amount: ₹${totalPrice.toLocaleString('en-IN')}\n` +
      `Delivery Location: ${deliveryLocation}\n` +
      `Preferred Payment: ${paymentMode.toUpperCase()}\n` +
      `Please confirm availability and dispatch time.`
    );
    window.open(`https://wa.me/${item.sellerPhone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handlePlaceDirectOrder = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
    setTimeout(() => {
      setOrderConfirmed(false);
      onClose();
    }, 2500);
  };

  const inputCls = "w-full bg-white border border-[var(--border-color)] rounded-lg px-4 py-2.5 text-sm text-[var(--text-main)] font-medium outline-none focus:border-[var(--accent)]";
  const labelCls = "block text-xs font-bold text-[var(--text-muted)] mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
      <div className="bg-white text-[var(--text-main)] w-full max-w-lg rounded-xl border border-[var(--border-color)] shadow-xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={22} className="text-[var(--accent)]" />
            <div>
              <h3 className="text-lg font-black leading-none">Order & Connect Direct with Farmer</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">Zero Middlemen • Verified Seller Direct Deal</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)]">
            <X size={20} />
          </button>
        </div>

        {orderConfirmed ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="text-2xl font-black text-[var(--text-main)]">Order Sent to Farmer!</h4>
            <p className="text-xs text-[var(--text-muted)]">
              The farmer ({item.sellerName}) has received your order for {item.title}. You will receive a call at your phone number shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handlePlaceDirectOrder} className="p-6 space-y-4">
            {/* Listing Summary */}
            <div className="bg-[var(--bg-subtle)] p-4 rounded-xl border border-[var(--border-color)] flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <h4 className="text-sm font-black text-[var(--text-main)] line-clamp-1">{item.title}</h4>
                <div className="text-xs text-[var(--accent)] font-extrabold">{item.price} {item.unit}</div>
                <div className="text-[11px] text-[var(--text-muted)] font-semibold">{item.sellerName} • {item.location}</div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Quantity ({item.unit})</label>
                <div className="flex items-center bg-white border border-[var(--border-color)] rounded-lg overflow-hidden">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-[var(--text-muted)] hover:text-[var(--text-main)] font-bold">-</button>
                  <span className="flex-1 text-center text-sm font-black text-[var(--text-main)]">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-[var(--text-muted)] hover:text-[var(--text-main)] font-bold">+</button>
                </div>
              </div>

              <div>
                <label className={labelCls}>Total Order Amount</label>
                <div className="bg-white border border-[var(--border-color)] rounded-lg px-4 py-2 text-lg font-black text-[var(--accent)]">
                  ₹ {totalPrice.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Delivery Location */}
            <div>
              <label className={labelCls}>Delivery Location / District *</label>
              <input
                type="text"
                required
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Payment Mode */}
            <div>
              <label className={labelCls}>Payment Option</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'cod', label: 'Cash on Delivery' },
                  { id: 'upi', label: 'UPI / GPay' },
                  { id: 'netbanking', label: 'Bank Transfer' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentMode(opt.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border ${
                      paymentMode === opt.id ? 'bg-[var(--text-main)] text-white border-[var(--text-main)]' : 'bg-white text-[var(--text-muted)] border-[var(--border-color)]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex items-center justify-between gap-3 border-t border-[var(--border-color)]">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="btn-secondary text-xs py-3 px-4 rounded-lg flex-1 justify-center"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                type="submit"
                className="btn-primary text-xs py-3 px-4 rounded-lg flex-1 justify-center"
              >
                <Truck size={16} />
                <span>Confirm Order</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
