import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap'

const Promosyon = () => {
    const [productId,] = useState(localStorage.getItem('id') ? localStorage.getItem('id') : '')
    const [url, setUrl] = useState('')




    useEffect(() => {
        axios.get(`https://api.extrazone.com/promotions?Id=${productId}`, {
            headers: {
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR'
            }

        }).then((result) => {
            console.log(result.data.Description)


            if (result.status === 200) {
                setUrl(result.data.ImageUrl)
            }

        })

    }, [productId])
    return (
        <div>
            <div>
                <img src={url} style={{ width: '100%', height: 'auto' }} alt='Promosyon görüntüsü bulunamadı' />
                <p><strong>*Kullanıcılarımız i&ccedil;in &ouml;nemli hatırlatma:</strong> 2022 yılı i&ccedil;inde kazanılmış olan hediyelerin ge&ccedil;erliliğini kaybetmemesi i&ccedil;in, hediyelerin ilgili platformlarda kullanılabileceği son tarihleri sayfanın sonunda bulunan tabloda g&ouml;r&uuml;nt&uuml;leyebilirsiniz.</p>
                <p>1 Ocak 2023 ile 31 Aralık 2023 tarihleri arasında T.C. sınırları i&ccedil;inde ge&ccedil;erli bu promosyon Coca-Cola Meşrubat Pazarlama Danışmanlık Sanayi ve Ticaret A.Ş. (&ldquo;Promosyon D&uuml;zenleyici&rdquo;) tarafından d&uuml;zenlenmektedir. Coca-Cola Orijinal Tat-Daha Az Kalori 2.5L PET, Coca-Cola Zero Sugar 2.5L PET, Sprite 2.5L PET &uuml;r&uuml;nlerinin promosyonlu g&uuml;m&uuml;ş renkli kapaklarının altında yer alan 10 haneli kodu, Daha Daha uygulaması veya <a href="http://www.dahadaha.com">www.dahadaha.com</a> internet adresindeki promosyon kartına giriş yaparak ilgili kısma girdikten sonra elde edeceğiniz puanlarla se&ccedil;eceğiniz hediyelerden birini kazanabilirsiniz. Her kapak altı kod 150 Daha Puan değerindedir.</p>
                <p>14 Şubat 2023 tarihinden &ouml;nce kazanılan puanların 14 Şubat 2023 saat 23:59&rsquo;a kadar, 15 Şubat-31 Mayıs 2023 tarihleri arasında kazanılan puanların 31 Mayıs 2023 saat 23:59&rsquo;a kadar, 1 Haziran-30 Eyl&uuml;l 2023 tarihleri arasında kazanılan puanların 30 Eyl&uuml;l 2023 saat 23:59&rsquo;a kadar, 1 Ekim-31 Aralık 2023 tarihleri arasında kazanılan Daha Puanların 31 Aralık 2023 saat 23:59&rsquo;a kadar kullanılması gerekmektedir, aksi halde Daha Puanlar bu tarih aralıklarından sonra (&ldquo;Tarih Aralığı&rdquo;) ge&ccedil;erliliğini kaybedecektir. Kullanıcılar, her bir tarih aralığında en fazla 20 kez kapak kodu girebilirler. Aynı zamanda g&uuml;nl&uuml;k en fazla 4 kapak kodu girebilirler. Her bir hediyeden bir tarih aralığında ka&ccedil; kez kazanılabileceği ve hediye kullanım koşulları ayrıca belirtilmektedir.</p>
                <p>Promosyonun detaylarına DahaDaha mobil uygulaması veya <a href="http://www.dahadaha.com">www.dahadaha.com</a> web sitesi &uuml;zerinden, 444 30 40 veya 0850 201 30 40 numaralı &uuml;cretsiz telefon hattından ulaşabilirsiniz. Promosyondan yararlanmak isteyen t&uuml;keticiler promosyon koşullarını kabul etmiş sayılırlar.</p>
                <p>G&uuml;m&uuml;ş kapaklı promosyonlu &uuml;r&uuml;nlerinin kapaklarının altındaki kodu Daha Daha uygulaması veya www.dahadaha.com web sitesi &uuml;zerinden promosyon kartına giriş yaparak, &uuml;r&uuml;nlerin kapakları altında yer alan kodu ilgili alana girmelisiniz. Bu işlemden sonra her kapak altı kod i&ccedil;in 150 Daha Puan kazanmış olacaksınız. Toplanan Daha Puanları anında harcayabilir, ya da &ldquo;Daha C&uuml;zdan&rdquo; altında biriktirebilirsiniz. Toplanan puanlara karşılık gelen, aşağıda listelenmiş hediyelerden birini alabilirsiniz.</p>
                <p><strong>Hediye Listesi ve Daha Puan Karşılıkları: </strong></p>
                <table width="311">
                    <tbody>
                        <tr>
                            <td width="227">
                                <p><strong>Hediye</strong></p>
                            </td>
                            <td width="84">
                                <p><strong>Daha Puan</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>100 MB Mobil Internet</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>250 MB Mobil Internet</p>
                            </td>
                            <td width="84">
                                <p>300</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>1GB Mobil Internet</p>
                            </td>
                            <td width="84">
                                <p>600</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>1 TL değerinde Hopi Paracık</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>5 TL değerinde Hopi Paracık</p>
                            </td>
                            <td width="84">
                                <p>450</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>10 TL değerinde Hopi Paracık</p>
                            </td>
                            <td width="84">
                                <p>750</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>5 TL değerinde Trendyol C&uuml;zdan Kodu</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>Exxen 1 Aylık &Uuml;yelik</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>1 haftalık FILMBOX+ &Uuml;yeliği</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>&nbsp;25 TL değerinde HOP Hediye Kodu</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>500 Pegasus BolPuan</p>
                            </td>
                            <td width="84">
                                <p>300</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>1000 Pegasus BolPuan</p>
                            </td>
                            <td width="84">
                                <p>600</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>Razer Gold Kodu 2TL</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="227">
                                <p>Haftalık Fizy Premium &Uuml;yeliği</p>
                            </td>
                            <td width="84">
                                <p>150</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>HEDİYE KULLANIM KOŞULLARI</strong></p>
                <p><strong>Mobil Internet Paketi:</strong>&nbsp;</p>
                <ul>
                    <li>Mobil Internet paketleri Vodafone, Turkcell ve T&uuml;rk Telekom operat&ouml;rleri i&ccedil;in ge&ccedil;erlidir. Kullanıcı tarafından belirtilen telefon numarasına, operat&ouml;r koşullarının karşılanması halinde 24 saat i&ccedil;inde internet paketi y&uuml;klemesi sağlanacaktır. Y&uuml;kleme s&uuml;resi operat&ouml;re g&ouml;re değişiklik g&ouml;sterebilir. T&uuml;m kodlardan y&uuml;klenecek MB&rsquo;lar y&uuml;klendiği andan itibaren 24 saat ge&ccedil;erli olacaktır.</li>
                    <li>Bir GSM iletişim hattına 1 g&uuml;n i&ccedil;erisinde en fazla 1 defa internet y&uuml;klemesi yapılabilir. Listelenen her bir mobil internet paketi bir kullanıcı tarafından bir tarih aralığında en fazla 5&rsquo;er kez kazanılabilir. (100 MB mobil internet paketinden en fazla 5 kez, 250 MB mobil internet paketinden en fazla 5 kez, 1 GB mobil internet paketinden en fazla 5 kez).</li>
                    <li>Mobil internet paketi hediyeleri 31 Aralık 2023&rsquo;e kadar kullanılabilir.</li>
                </ul>
                <p><strong>Trendyol C&uuml;zdan Kodları:</strong><u>&nbsp;</u></p>
                <ul>
                    <li>5 TL değerindeki Trendyol C&uuml;zdan kodu, 31 Ocak 2023&rsquo;e kadar kazanılabilecek olup, 28 Şubat 2023 tarihine kadar Trendyol platformunda kullanılmalıdır. 28 Şubat 2023 tarihine kadar Trendyol&rsquo;da kullanılmayan C&uuml;zdan Kodları ge&ccedil;erliliğini kaybedecektir.</li>
                    <li>Kodlar altın, dijital &uuml;r&uuml;n* ve cep telefonu butikleri hari&ccedil; t&uuml;m butiklerde ge&ccedil;erlidir. (*Dijital &uuml;r&uuml;nler: Netflix abonelikleri, oyun pinleri vb).&nbsp;</li>
                    <li>Her kullanıcı promosyondan bir tarih aralığı boyunca 5 kez yararlanabilir.</li>
                    <li>Farklı alışverişlerde par&ccedil;alı olarak kullanılabilir.</li>
                    <li>Kalan bakiye takibi kolaylıkla yapılabilir.</li>
                    <li>İndirimli &uuml;r&uuml;nler dahil, mevcut t&uuml;m kampanyalarda, aynı zamanda Trendyol Market &amp; Yemek platformlarında ge&ccedil;erlidir.</li>
                    <li>Hediye edilen tutarın &uuml;st&uuml;ne c&uuml;zdana istenilen miktarda para aktarılabilir.</li>
                    <li>İptal ve iade durumunda sipariş tutarı tekrar c&uuml;zdana y&uuml;klenir.</li>
                    <li>Trendyol.com promosyon koşullarını değiştirme hakkını saklı tutar.</li>
                </ul>
                <p><strong><u>Exxen 1 Aylık &Uuml;yelik:</u></strong></p>
                <ul>
                    <li>Daha Daha&rsquo;dan kazanacağınız hediye kodu Exxen Dijital Yayın Platformu&rsquo;na 1 ay boyunca &uuml;cretsiz &uuml;yelik sağlayacaktır.</li>
                    <li>Hediye kodu ile kazanılan &uuml;yelikler Exxen Dijital Yayın Platformu&rsquo;nun &ldquo;RKLMVAR&rdquo; paketini kapsamaktadır.</li>
                    <li>Hediye kodlar en ge&ccedil; 1 Temmuz 2023 tarihine kadar <a href="http://www.exxen.com">www.exxen.com</a> web sitesi veya mobil uygulaması &uuml;zerinden aktif edilmelidir, bu tarihe kadar kullanılmayan kodlar ge&ccedil;erliliğini kaybedecektir.</li>
                    <li>Exxen Dijital Yayın Platformu&rsquo;na &uuml;yelik işlemleri esnasında kullanıcıların kredi kartı bilgilerini girmeleri gerekmektedir.&nbsp;</li>
                    <li>Her kullanıcı promosyondan bir tarih aralığı boyunca 5 kez yararlanabilir.</li>
                </ul>
                <p><strong><u>HOPİ Paracık:</u></strong></p>
                <ul>
                    <li>Hopi&rsquo;nin &ouml;d&uuml;l puanı Paracıklar, alışverişlerde 1 Paracık 1 TL değerinde kazanılır/kullanılır.</li>
                    <li>Hopi işyerleri, &uuml;r&uuml;nleri ve/veya kampanyaları itibariyle kazanım/kullanım i&ccedil;in farklı değerler uygulanabilir, bazılarında ge&ccedil;erli olmayabilir.</li>
                    <li>Hopi, Paracık kurallarını değiştirebilir, uygulamayı sonlandırabilir.</li>
                    <li>&nbsp;Kazanılan Paracıklar en ge&ccedil; 10 Mayıs 2023 tarihine kadar kullanılmalıdır; bu tarihe kadar kullanılmayan Paracıklar ge&ccedil;erliliğini kaybedecektir.</li>
                    <li>Hopi, promosyon koşul, s&uuml;re ve kapsamını değiştirme hakkına sahiptir.</li>
                    <li>Uygulama indirimi-kullanımlarında iletişim &uuml;creti dahil t&uuml;m bedeller ilgili anlaşmalarına g&ouml;re kullanıcılara aittir.</li>
                    <li>Listelenen her bir Paracık &ouml;d&uuml;l&uuml; bir kullanıcı tarafından bir tarih aralığında en fazla 5&rsquo;er kez kazanılabilir. (1 TL değerinde HOPİ Paracık en fazla 5 kez, 5 TL değerinde HOPİ Paracık en fazla 5 kez, 10 TL değerinde HOPİ Paracık en fazla 5 kez).</li>
                    <li>Hopi'de kayıtlı olan bir hesaba bir tarih aralığı boyunca en fazla 15 kez y&uuml;kleme yapılabilir. (1 TL değerinde HOPİ Paracık en fazla 5 kez, 5 TL değerinde HOPİ Paracık en fazla 5 kez, 10 TL değerinde HOPİ Paracık en fazla 5 kez y&uuml;kleme yapılabilir).</li>
                </ul>
                <p><strong><u>Filmbox+ &Uuml;yeliği</u></strong></p>
                <ul>
                    <li>Daha Daha&rsquo;dan kazanacağınız hediye kod 1 hafta boyunca Filmbox platformuna &uuml;cretsiz &uuml;yelik sağlayacaktır.</li>
                </ul>
                <ul>
                    <li>Kullanıcıların promosyondan yararlanabilmeleri i&ccedil;in, Daha Daha &uuml;zerinden oluşturulan dijital kod ile Filmbox platformuna &uuml;ye olmaları ve Filmbox platformuna kredi kartı bilgilerini girmeleri gerekmektedir.</li>
                    <li>1 haftalık &uuml;cretsiz &uuml;yeliğin bitiminde &uuml;yeliğin iptal edilmemesi halinde &uuml;yelik 1 yıllığına otomatik olarak uzayacaktır. Uzatılan &uuml;yelik, bu promosyona &ouml;zel aylık 12.99 TL yerine 1 yıl i&ccedil;in aylık 6 TL&rsquo;dir.</li>
                </ul>
                <ul>
                    <li>Her kullanıcı promosyondan bir tarih aralığı boyunca 1 kez yararlanabilir.&nbsp;</li>
                    <li>Hediye kodlar en ge&ccedil; 31 Ocak 2023 tarihine kadar <a href="http://www.filmbox.com">www.filmbox.com</a> web sitesi veya mobil uygulaması &uuml;zerinden aktif edilmelidir, bu tarihe kadar kullanılmayan kodlar ge&ccedil;erliliğini kaybedecektir.</li>
                    <li>Filmbox+ &uuml;yelik hediyesi 500.000 adet ile sınırlıdır.</li>
                </ul>
                <p><strong><u>Pegasus BolPuan</u></strong></p>
                <ul>
                    <li>Pegasus BolPuan hediyesi, 500 veya 1000 puan olarak 31 Ekim 2023 tarihine kadar kazanılabilir.</li>
                    <li>Pegasus BolPuan kazanabilmek i&ccedil;in <a href="https://web.flypgs.com/signup?ds_rl=1256628&amp;ds_rl=1263170&amp;ds_rl=1263170&amp;gclid=EAIaIQobChMIh6zjzrGy-wIVh_Z3Ch2OqArxEAAYASABEgIob_D_BwE&amp;gclsrc=aw.ds">Pegasus BolBol &uuml;yesi</a> olmanız gerekmektedir. Pegasus <a href="http://www.flypgs.com">flypgs.com</a> internet sitesi veya <a href="https://play.google.com/store/apps/details?id=com.pozitron.pegasus&amp;referrer=adjust_reftag%3DcmxKGs9oTp2Xd%26utm_source%3DAnasayfa%2BAlt%2BBanner">Pegasus Mobil Uygulama</a> &uuml;zerinden &uuml;cretsiz olarak Pegasus BolBol &uuml;yesi olabilirsiniz. Pegasus BolBol &uuml;yesi olmayan kişiler bu promosyondan faydalanamazlar.</li>
                    <li>Hediye se&ccedil;imi sırasında Pegasus BolBol hesabınızın tanımlı olduğu cep telefonu numaranızı girmeniz gerekmektedir. Girilen cep telefonu ile ilişkilendirilmiş bir Pegasus BolBol hesabı bulunamadığı durumda, bu promosyon kapsamında belirtilen Pegasus BolPuanlar kazanılamayacaktır.</li>
                    <li>Her kullanıcı, bir tarih aralığı boyunca toplamda en fazla 2000 Pegasus BolPuan kazanma hakkına sahiptir. (2 adet 500 Pegasus BolPuan ve 1 adet 1000 Pegasus BolPuan)</li>
                    <li>Bir Pegasus BolBol hesaba bir tarih aralığı boyunca en fazla 6 kez y&uuml;kleme yapılabilir. (4 adet 500 Pegasus BolPuan ve 2 adet 1000 Pegasus BolPuan)</li>
                    <li>Daha Daha &uuml;zerinden kazanılan BolPuanlar, hediye se&ccedil;imi yapıldıktan sonra 48 (kırk sekiz) saat i&ccedil;inde Pegasus BolBol hesabınıza y&uuml;klenecektir.</li>
                    <li>Pegasus BolPuanları Pegasus BolBol hesabınıza y&uuml;klendiğinde, Pegasus BolPuanları ge&ccedil;erliliğini koruduğu s&uuml;rece dilediğiniz zaman kullanabilirsiniz.</li>
                    <li>Kazanılan BolPuanlar, hesabınızda biriktirdiğiniz diğer BolPuanlar gibi, u&ccedil;ak bileti satın alımlarında ya da Pegasus'un ek &uuml;r&uuml;n ve hizmetlerinin satın alımında kullanılabilir. U&ccedil;ak bileti veya Pegasus ek &uuml;r&uuml;n ve hizmet satın alımı i&ccedil;in gereken minimum Pegasus BolPuanlar hakkında Pegasus Genel Kuralları&rsquo;nda yer alan h&uuml;k&uuml;mler ge&ccedil;erlidir.</li>
                    <li>Promosyon kapsamında kazanılan puanlar başkasına satılamaz veya devredilemez.</li>
                    <li>Pegasus ve Promosyon D&uuml;zenleyici Daha Daha, BolPuan tutarını belirli d&ouml;nemlerde değiştirebilme ve promosyon kurallarında değişiklik yapma ve promosyonu durdurma hakkını saklı tutar.Promosyona dahil olmayan diğer her t&uuml;rl&uuml; işlemde ve Pegasus BolBol hakkındaki diğer t&uuml;m h&uuml;k&uuml;mlerde Pegasus Genel Kuralları ge&ccedil;erli olacaktır.</li>
                </ul>
                <p><strong>Haftalık Fizy Premium &Uuml;yeliği</strong></p>
                <ul>
                    <li>Fizy Premium hizmetlerinden faydalanabilmek i&ccedil;in Fizy &uuml;yeliğinizin bulunması gerekmektedir.</li>
                    <li>Fizy Premium &Uuml;yeliği i&ccedil;in Daha Daha &uuml;zerinden kazanılan dijital hediye kodunu&nbsp;<a href="http://fizy.com/promocode/">http://fizy.com/promocode/</a>bağlantısı &uuml;zerinden telefon numaranızla beraber girerek aktif edebilirsiniz.</li>
                    <li>&Uuml;yelik, aktivasyon tarihinden itibaren 1 hafta ge&ccedil;erlidir, 1 haftanın sonunda &uuml;yelik bildirim olmaksızın kendiliğinden sona erecektir.</li>
                    <li>Fizy Premium &Uuml;yeliği hediyesi Daha Daha &uuml;zerinden 15 Nisan 2023 tarihine kadar kazanılabilir ve hediye kodların 30 Nisan 2023&nbsp;tarihi bitimine kadar belirtilen internet adresi &uuml;zerinden aktif edilmesi gerekmektedir. Bu tarihe kadar kullanılmayan kodlar ge&ccedil;erliliğini kaybedecektir.</li>
                    <li>Bir kullanıcı bir tarih aralığında en fazla 5 kez promosyondan faydalanabilir.</li>
                </ul>
                <p><strong>Razer Gold 2 TL</strong></p>
                <ul>
                    <li>Daha Daha &uuml;zerinden alınacak Razer Gold bakiye kodları sadece Razer Gold TRY C&uuml;zdan&rsquo;a y&uuml;kleme yapılarak kullanılabilir.&nbsp;<a href="http://www.gold.razer.com/">gold.razer.com</a>web sitesi &uuml;zerinden mevcut hesabınıza giriş yaparak veya &uuml;yelik oluşturarak c&uuml;zdan kurulumunuzu tamamladıktan sonra&nbsp;sağ &uuml;st k&ouml;şede bulunan "Y&uuml;kleme Yap" butonuna tıklayın. Gelen sayfada &ouml;deme y&ouml;ntemleri arasından "Razer Gold PIN" se&ccedil;eneğini işaretleyin ve DahaDaha&rsquo;dan kazanmış olduğunuz kodu girdikten sonra "İleri" butonuna tıkladığınızda bakiyeniz kullanıma hazır olacaktır. Hediye karşılığı olarak 1&rsquo;er TL&rsquo;lik 2 kod verilecektir.</li>
                    <li>Hediye kodları 30 Haziran 2023 tarihine kadar kazanılabilir ve hediye kodların 7 Temmuz 2023&nbsp;tarihi bitimine kadar belirtilen internet adresi &uuml;zerinden kullanılması gerekmektedir. Bu tarihe kadar kullanılmayan kodlar ge&ccedil;erliliğini kaybedecektir.</li>
                    <li>Bir kullanıcı bir tarih aralığında en fazla 5 kez promosyondan faydalanabilir.</li>
                </ul>
                <p><strong><u>Hop 25 TL Hediye Kodu</u></strong></p>
                <ul>
                    <li>Hop uygulamasında ilk kez s&uuml;r&uuml;ş yapacak olan kullanıcılar bu promosyondan faydalanabilir.</li>
                    <li>Men&uuml;deki c&uuml;zdan &gt; promosyonlarım ekranında Daha Daha uygulamasından alınan hediye kodu girerek 25 TL değerinde bakiye kazanabilirsiniz.</li>
                    <li>Her bir kullanıcı, promosyondan yalnızca bir kez yararlanabilir.</li>
                    <li>Hediye kod başka indirim kuponları ile birleştirilemez.</li>
                    <li>Promosyon kapsamında kazanılan indirim hakkı başkasına satılamaz ve devredilemez.</li>
                    <li>Daha Daha uygulamasından kazanılan hediye kodların 31 Mart 2023 tarihine kadar kullanılması gerekmektedir, bu tarihe kadar kullanılmayan kodlar ge&ccedil;erliliğini kaybedecektir.</li>
                </ul>
                <p><strong>GENEL KOŞULLAR</strong></p>
                <p>Promosyonlu g&uuml;m&uuml;ş renkli kapakların altındaki kodun belirtilen &ldquo;Daha Daha&rdquo; uygulaması veya <a href="http://www.dahadaha.com">www.dahadaha.com</a> isimli internet sitesindeki ilgili kısma girilmesi t&uuml;keticinin sorumluluğundadır. İlgili kapak altındaki kod tahrif edilmemeli, bozulmamalı, &uuml;zerinde oynama yapılmamalıdır. Promosyon D&uuml;zenleyici ilgili kodların tahrif edilmesi veya sistem tarafından kabul edilmemesi, veyahut da t&uuml;keticinin kodu internet sitesine veya uygulamaya girerken yaşanabilecek internet kaynaklı veya diğer t&uuml;rl&uuml; aksaklık durumları dahil olmak &uuml;zere s&uuml;rece ilişkin teknik veya başka t&uuml;r aksaklıklar sebebiyle sorumlu tutulamaz. Promosyon kapsamındaki Daha Daha mobil uygulaması ve www.dahadaha.com web sitesi kullanımı ile, hediyelerin kullanılacağı web siteleri ve uygulamalarla ilgili olan t&uuml;m riskler kullanıcıların sorumluluğundadır. İnternet sitesinin kullanımı halinde meydana gelecek hi&ccedil;bir olay nedeni ile sorumluluk kabul edilmemektedir ve kullanıcılara hi&ccedil;bir sebeple tazminat. &ouml;denmeyecektir</p>
                <p>Bu promosyonun hediyelerinin karşılığı nakit (T&uuml;rk Lirası) olarak talep edilemez. Promosyon &ouml;d&uuml;l kodları diğer promosyonlar ile birleştirilemez, nakite &ccedil;evrilemez, takas, devir, temlik edilmez, depozito olarak kullanılamaz veya herhangi bir hesaba &ouml;deme olarak aktarılamaz. Her bir promosyonlu g&uuml;m&uuml;ş renkli kapak tek seferlik kullanım i&ccedil;indir ve ticari ama&ccedil;la kullanılamaz. Promosyon bitiş tarihi olan 31 Aralık 2023 g&uuml;n&uuml; hitamından sonra kodların internet sitesine girilmesi durumunda hediye kazanılamayacaktır.</p>
                <p>Promosyon d&uuml;zenleyici, promosyon s&uuml;resince tek taraflı ve tamamen kendi takdirinde olarak promosyon koşullarını değiştirme veya promosyonu sona erdirme hakkına sahiptir. Promosyona ilişkin değişiklikler www.coca-cola.com.tr web sayfası ve Daha Daha uygulaması &uuml;zerinden duyurulacaktır.</p>
                <p>Promosyon D&uuml;zenleyici, ş&uuml;pheli bulunulan durumlarda hangi noktadan promosyonlu &uuml;r&uuml;n alındığı bilgisini sorma ve ayrıca promosyonlu g&uuml;m&uuml;ş renkli kapağı talep etme hakkına sahiptir. Dolayısıyla, kapak altındaki kodun &ldquo;Daha Daha&rdquo; uygulaması veya <a href="http://www.dahadaha.com">www.dahadaha.com</a> internet sitesine girildikten sonra, hediyenin meşru şekilde kazanıldığının ispatı a&ccedil;ısından hediye alınana dek promosyonlu kapağın tedbir amacıyla t&uuml;ketici tarafından muhafaza edilmesi &ouml;nerilmektedir. Promosyon D&uuml;zenleyici ş&uuml;pheli bulunulan durumlarda Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) ve sair mavzuat h&uuml;k&uuml;mleri ile uygunluk i&ccedil;erisinde olmak kaydıyla katılımcılardan ilave bilgi ve belge sorma hakkına sahip olup; ibrazının KVKK mevzuatınca m&uuml;mk&uuml;n kılınan talep edilen bilgi ve belgelerin ibraz edilmediği veya ş&uuml;pheli bulunduğu durumlarda hediye vermeme hakkını saklı tutar. Herhangi bir suistimal ş&uuml;phesi var olduğunda, Promosyon D&uuml;zenleyici&rsquo;nin ilgili satış noktasını ve/veya t&uuml;keticiyi promosyon kapsamı dışında tutması, promosyondan yararlanma hakkını sınırlaması ve sair tedbirleri alma hakkı saklıdır. Promosyona katılan satış noktaları ve t&uuml;keticiler promosyon koşullarını kabul etmiş sayılacaklardır.&nbsp;&nbsp;</p>
                <p>18 yaşından k&uuml;&ccedil;&uuml;kler promosyona katılamaz, katılmış ve kazanmış olsalar dahi ikramiyeleri verilemez. İkramiyeye konu olan eşya ve /veya hizmetin bedeli i&ccedil;inde bulunan KDV+&Ouml;TV gibi vergiler dışındaki vergi ve diğer yasal y&uuml;k&uuml;ml&uuml;l&uuml;kler talihliler tarafından &ouml;denir.</p>
                <p>Uygulama i&ccedil;erisindeki kampanya, fırsat, &ouml;d&uuml;l ve &ccedil;ekilişler ile ilgili Apple Inc., Google şirketlerinin herhangi bir katılımı, sponsorluğu veya sorumluluğu bulunmamaktadır. Apple ve Google sadece uygulamanın dağıtımını yapmaktadır. T&uuml;ketici hi&ccedil;bir şekilde Apple ve Google&rsquo;ı kampanya koşulları ve &ouml;d&uuml;ller ile ilgili sorumlu tutamaz. Kullanıcı S&ouml;zleşmesi&rsquo;ne ve Gizlilik Politikası&rsquo;na &ldquo;Daha Daha&rdquo; uygulaması &uuml;zerinden erişilebilir.</p>
                <p>Daha Daha mobil uygulaması veya <a href="http://www.dahadaha.com">www.dahadaha.com</a> web sitesi &uuml;zerinden &uuml;yelik ger&ccedil;ekleştirmek i&ccedil;in, kişisel verilerin toplanması, işlenmesi, kaydedilmesi ile ilgili detaylı bilgilendirmeyi i&ccedil;eren Aydınlatma Metni okunduktan sonra 6698 S. KVKK gereği A&ccedil;ık Rıza Beyanının verilebilmesi i&ccedil;in ilgili kutucuklar se&ccedil;ilmelidir. Bu şekilde sistem b&uuml;nyesine &uuml;ye olarak dahil olunabilir.&nbsp;</p>
                <p>İletişim formumun altında yer alan ticari elektronik ileti g&ouml;nderimine ilişkin kutucuğu işaretleyen kullanıcıların kişisel verileri, Kişisel Verilerin Korunması Politikası kuralları uyarınca ve Aydınlatma Metni kapsamında belirtilen ama&ccedil;larla toplanabilir, işlenebilir, saklanabilir; ve bu kullanıcılara, belirtilen şekilde &uuml;r&uuml;nler, promosyonlar veya kampanyalar hakkında bilgilendirici SMS ve/veya e-posta g&ouml;nderimleri yapılabilir. Ticari elektronik izni her zaman geri alınabilir.</p>
                <p>Promosyona katılan herkes t&uuml;m koşulları kabul etmiş sayılır. Promosyon D&uuml;zenleyici dilediği zaman kampanyayı durdurma ve koşulları değiştirme hakkını saklı tutar ve promosyon d&uuml;zenleyicinin promosyon kapsamında her zaman tek taraflı d&uuml;zenleme, iptal, askıya alma, derhal sonlandırma hakkı saklıdır. Promosyona ilişkin değişiklikler <a href="http://www.coca-cola.com.tr">www.coca-cola.com.tr</a> web sayfası &nbsp;ve&nbsp; Daha Daha &uuml;zerinden duyurulacaktır.</p>
                <p>Ş&uuml;pheli bulunulan durumlarda Daha Daha websitesi veya uygulamasından ilgili kayıtların incelenmesi, katılımcıya soru sorulması dahil gerekli araştırmaları ayrıntılı olarak yapma hakkı bulunmaktadır. Promosyon D&uuml;zenleyici teyit i&ccedil;in talep edilen bilgi ve belgelerin ibraz edilmediği veya ş&uuml;pheli bulunduğu durumlarda, uyarma, &uuml;yeliği askıya alma, hediye vermeme veya hediyeyi iptal etme hakkını saklı tutar. İlgili eylemin vergi veyahut ceza mevzuatı bağlamında sahtecilik veya başka cezai su&ccedil; teşkil etmesi ş&uuml;phesi durumunda T&uuml;rk Ceza Kanunu (&ldquo;TCK&rdquo;) bağlamında işlem yapılması hakkı saklıdır. Olası k&ouml;t&uuml;ye kullanımlar nedeniyle ortaya &ccedil;ıkabilecek her t&uuml;rl&uuml; maddi, manevi ve 3. kişiler nezdinde meydana gelebilecek yansıma zararlardan dolayı promosyon d&uuml;zenleyicinin ve/veya iş ortakları, hizmet sağlayıcıları ile y&uuml;klenicilerinin tazminat &ouml;deme y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml; altında kalması halinde eylemi işleyen kişiden/kişilerden r&uuml;cuen tazmin edilecektir, bu husustaki t&uuml;m hukuki haklar saklı tutulmaktadır.</p>
                <p>Coca-Cola, Coke, Coca-Cola Zero, Coke Zero, dinamik kuşak, kontur şişe, Fanta, Sprite ve Daha Daha The Coca-Cola Company&rsquo;nin tescilli markalarıdır. &copy;2023 The Coca-Cola Company.</p>
                <p>&nbsp;</p>
                <p><strong>*</strong>2022 yılı i&ccedil;inde kazanılmış olan hediyelerin aşağıda belirtilen tarihlere kadar kullanılması gerekmektedir, aksi halde hediyeler Daha C&uuml;zdan&rsquo;dan silinecek ve ge&ccedil;erliliğini kaybedecektir.</p>
                <table width="468">
                    <tbody>
                        <tr>
                            <td width="235">
                                <p><strong>Hediye</strong></p>
                            </td>
                            <td width="233">
                                <p><strong>Hediyenin ilgili platformda kullanılabileceği son tarih</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>100 MB Internet</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>1GB Internet</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>10 Hopi Paracık</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>5TL Trendyol C&uuml;zdan &Ccedil;eki</p>
                            </td>
                            <td width="233">
                                <p>28 Şubat 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>250 MB Internet</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>10TL Dijital Sodexo Yemek &Ccedil;eki</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Exxen 1 Aylık &Uuml;yelik</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>1 Hopi Paracık</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>5 Hopi Paracık</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Defacto 40TL İndirim</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>FUPS 20TL&nbsp;</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>5TL Dijital Sodexo Yemek &Ccedil;eki</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>1 haftalık FILMBOX+ &Uuml;yeliği</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Efsane İkili'ye 2 Dondurma Hediye</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Lords Mobile Oyun Kodu</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Siparişine Cheeseburger 20TL</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Siparişine Big Mac 25TL</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Yemeksepeti 20 TL İndirimi</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Hop 25TL Hediye</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Siparişine 8&rsquo;li &Ccedil;ıtır Soğan 15TL</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Fetih Oyun Kodu</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Tavla Stars 40TL Oyun Kodu</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>TikTak&rsquo;tan 200 TL Hediye</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>Tavla Stars 22,9TL Oyun Kodu</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>500 Pegasus BolPuan</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>1000 Pegasus BolPuan</p>
                            </td>
                            <td width="233">
                                <p>31 Ocak 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td width="235">
                                <p>D&amp;R'da 15TL İndirim</p>
                            </td>
                            <td width="233">
                                <p>31 Aralık 2022</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </div>
    )
}

export default Promosyon