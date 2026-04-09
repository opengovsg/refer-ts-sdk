# Reference

## Eligibility

<details><summary><code>client.eligibility.<a href="/src/api/resources/eligibility/client/Client.ts">get</a>({ ...params }) -> ReferralExchange.EligibilityRes</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eligibility.get({
    referrerId: "referrerId",
    referrerIdType: "mcr",
    referrerInstitutionId: "referrerInstitutionId",
    uin: "uin",
    offeringId: "offeringId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.EligibilityGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Referrals

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">list</a>({ ...params }) -> ReferralExchange.PaginatedReferralsDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.ReferralsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">upsert</a>({ ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.upsert({
    patient: {
        uin: "uin",
        name: "name",
        phoneNumber: "91234567",
        dob: "1990-01-01",
        gender: "Male",
    },
    offeringId: "offeringId",
    senderHciCode: "senderHciCode",
    senderInstitutionName: "senderInstitutionName",
    doctorMcr: "doctorMcr",
    doctorName: "doctorName",
    doctorEmail: "doctorEmail",
    doctorContactNumber: "doctorContactNumber",
    isSubsidised: true,
    isUrgent: true,
    isDraft: true,
    formResponses: [
        {
            question: "question",
            id: "id",
            answer: "answer",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.CreateReferralReq`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">listByInstitution</a>(institutionIdType, institutionId, { ...params }) -> ReferralExchange.PaginatedReferralsDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.listByInstitution("hci", "institutionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**institutionIdType:** `ReferralExchange.InstitutionIdType` — The type of institution ID

</dd>
</dl>

<dl>
<dd>

**institutionId:** `string` — The institution ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.ReferralsListByInstitutionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">get</a>(referralId, { ...params }) -> ReferralExchange.FullReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.get("referralId", {
    requesterIdentifier: "requester@example.com",
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.ReferralsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">delete</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.delete("referralId", {
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.ReferralsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">cancel</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.cancel("referralId", {
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.CancelReferralReq`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">amend</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.amend("referralId", {
    timeslotStartAt: 1714857600000,
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.AmendReferralReq`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">accept</a>(referralId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.accept("referralId", {
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.AcceptReferralBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">reject</a>(referralId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.reject("referralId", {
    rejectionMessage: "rejectionMessage",
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.RejectReferralBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">backToDraft</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.backToDraft("referralId", {
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.BackToDraftReferralBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notes

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">create</a>(referralId, { ...params }) -> ReferralExchange.NoteDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.create("referralId", {
    authorHciCode: "authorHciCode",
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.CreateNoteReq`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Referrers

<details><summary><code>client.referrers.<a href="/src/api/resources/referrers/client/Client.ts">apiHoldingControllerGetReferrers</a>({ ...params }) -> ReferralExchange.GetReferrersRes</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrers.apiHoldingControllerGetReferrers({
    idType: "mcr",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.ApiHoldingControllerGetReferrersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Referrers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Offerings

<details><summary><code>client.offerings.<a href="/src/api/resources/offerings/client/Client.ts">list</a>({ ...params }) -> ReferralExchange.OfferingWithAllowedDto[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.offerings.list({
    referrerId: "referrerId",
    referrerIdType: "mcr",
    referrerInstitutionId: "referrerInstitutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.OfferingsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Offerings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.offerings.<a href="/src/api/resources/offerings/client/Client.ts">apiHoldingControllerGetRecommendedOffering</a>({ ...params }) -> ReferralExchange.OfferingDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.offerings.apiHoldingControllerGetRecommendedOffering({
    category: "aac",
    postalCode: "postalCode",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.ApiHoldingControllerGetRecommendedOfferingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Offerings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.offerings.<a href="/src/api/resources/offerings/client/Client.ts">listTimeslots</a>(offeringId, { ...params }) -> ReferralExchange.Timeslot[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.offerings.listTimeslots("offeringId", {
    from: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**offeringId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.OfferingsListTimeslotsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Offerings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Links

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">createUpsertLink</a>({ ...params }) -> ReferralExchange.ReferralUpsertLinkDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.createUpsertLink({
    referrerInstitutionId: "referrerInstitutionId",
    referrerInstitutionIdType: "hci",
    referrerInstitutionName: "referrerInstitutionName",
    referrerId: "referrerId",
    requesterIdentifier: "requester@example.com",
    referrerIdType: "mcr",
    referrerName: "referrerName",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ReferralExchange.CreateLinkReqUpsert`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Public

<details><summary><code>client.public.<a href="/src/api/resources/public/client/Client.ts">getReferral</a>(referralId, { ...params }) -> ReferralExchange.PublicReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.public.getReferral("referralId", {
    requesterIdentifier: "requester@example.com",
    institutionIdType: "hci",
    institutionId: "institutionId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referralId:** `string` — Referral ID

</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.PublicGetReferralRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Public.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">submitSingHealthFormsg</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.submitSingHealthFormsg();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">submitFormsg</a>(formId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.submitFormsg("formId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**formId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Health

<details><summary><code>client.health.<a href="/src/api/resources/health/client/Client.ts">check</a>() -> ReferralExchange.OkResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.health.check();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Health.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
