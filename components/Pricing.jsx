import React from 'react';
import Section from './Section';

const Pricing = () => {
  return (
    <Section id="pricing" className="bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Price Chart</h2>
        <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
        <p className="text-slate-600">Explore our comprehensive pricing structure designed for transparency.</p>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-lg border border-slate-200">
        <table className="w-full min-w-[800px] bg-white text-left text-sm text-slate-700">
          <thead className="bg-navy-900 text-white font-serif uppercase tracking-wider text-xs md:text-sm">
            <tr>
              <th className="px-6 py-4 font-semibold border-r border-navy-800">Dimension</th>
              <th className="px-6 py-4 font-semibold border-r border-navy-800">Rate / Sqft</th>
              <th className="px-6 py-4 font-semibold border-r border-navy-800 ">Total Amount</th>  {/* bg-navy-800 */}
              <th className="px-6 py-4 font-semibold border-r border-navy-800 ">Down Payment (30%)</th>  {/* text-gold-400 */}
              <th className="px-6 py-4 font-semibold border-r border-navy-800">1st Installment (30%)</th>
              <th className="px-6 py-4 font-semibold border-r border-navy-800">2nd Installment (20%)</th>
              <th className="px-6 py-4 font-semibold">Final (20%)</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-slate-100">
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 font-bold text-navy-900">30 x 40</td>
            <td className="px-6 py-4">₹1,399</td>
            <td className="px-6 py-4 font-bold text-navy-900 bg-slate-50">₹16,78,800</td>
            <td className="px-6 py-4 font-medium">₹5,03,640</td>
            <td className="px-6 py-4">₹5,03,640</td>
            <td className="px-6 py-4">₹3,35,760</td>
            <td className="px-6 py-4">₹3,35,760</td>
          </tr>

  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-bold text-navy-900">30 x 50</td>
    <td className="px-6 py-4">₹1,399</td>
    <td className="px-6 py-4 font-bold text-navy-900 bg-slate-50">₹20,98,500</td>
    <td className="px-6 py-4 font-medium">₹6,29,550</td>
    <td className="px-6 py-4">₹6,29,550</td>
    <td className="px-6 py-4">₹4,19,700</td>
    <td className="px-6 py-4">₹4,19,700</td>
  </tr>

  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-bold text-navy-900">40 x 60</td>
    <td className="px-6 py-4">₹1,399</td>
    <td className="px-6 py-4 font-bold text-navy-900 bg-slate-50">₹33,37,600</td>
    <td className="px-6 py-4 font-medium">₹10,07,280</td>
    <td className="px-6 py-4">₹10,07,280</td>
    <td className="px-6 py-4">₹6,71,520</td>
    <td className="px-6 py-4">₹6,71,520</td>
  </tr>
          </tbody>

        </table>
      </div>
      <p className="mt-4 text-xs text-slate-500 text-right">* Prices are subject to change. Registration and taxes extra as applicable.</p>
    </Section>
  );
};

export default Pricing;