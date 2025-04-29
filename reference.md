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
await client.referrals.list({
    hciCode: "hciCode",
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

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">get</a>(referralId, { ...params }) -> ReferralExchange.FullReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.get("referralId");
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

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">delete</a>(referralId) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.delete("referralId");
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
await client.referrals.cancel("referralId");
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
await client.referrals.accept("referralId");
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

<details><summary><code>client.referrals.<a href="/src/api/resources/referrals/client/Client.ts">backToDraft</a>(referralId) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referrals.backToDraft("referralId");
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

## Offerings

<details><summary><code>client.offerings.<a href="/src/api/resources/offerings/client/Client.ts">list</a>({ ...params }) -> ReferralExchange.OfferingDto[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.offerings.list();
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
    isSubsidised: true,
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
await client.public.getReferral("referralId");
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
