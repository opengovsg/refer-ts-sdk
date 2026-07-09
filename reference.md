# Reference
## RetrievingReferrals
<details><summary><code>client.retrievingReferrals.<a href="/src/api/resources/retrievingReferrals/client/Client.ts">listByInstitution</a>(institutionIdType, institutionId, { ...params }) -> ReferralExchange.PaginatedReferralsDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.retrievingReferrals.listByInstitution("hci", "institutionId");

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

**request:** `ReferralExchange.ListByInstitutionRetrievingReferralsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RetrievingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.retrievingReferrals.<a href="/src/api/resources/retrievingReferrals/client/Client.ts">get</a>(referralId, { ...params }) -> ReferralExchange.FullReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.retrievingReferrals.get("referralId", {
    requesterIdentifier: "requester@example.com",
    institutionIdType: "hci",
    institutionId: "institutionId"
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

**request:** `ReferralExchange.GetRetrievingReferralsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RetrievingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.retrievingReferrals.<a href="/src/api/resources/retrievingReferrals/client/Client.ts">getActionLink</a>(referralId, type, { ...params }) -> ReferralExchange.ReferralActionLinkDtoV2</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.retrievingReferrals.getActionLink("referralId", "amend", {
    requesterIdentifier: "requester@example.com",
    institutionIdType: "hci",
    institutionId: "institutionId"
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

**referralId:** `string` — The ID of the referral
    
</dd>
</dl>

<dl>
<dd>

**type:** `ReferralExchange.ReferralActionLinkTypeV2` — The type of action link to retrieve
    
</dd>
</dl>

<dl>
<dd>

**request:** `ReferralExchange.GetReferralActionLinkReq` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RetrievingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## UpdatingReferrals
<details><summary><code>client.updatingReferrals.<a href="/src/api/resources/updatingReferrals/client/Client.ts">delete</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.updatingReferrals.delete("referralId", {
    institutionIdType: "hci",
    institutionId: "institutionId"
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

**request:** `ReferralExchange.DeleteUpdatingReferralsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UpdatingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.updatingReferrals.<a href="/src/api/resources/updatingReferrals/client/Client.ts">cancel</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.updatingReferrals.cancel("referralId", {
    cancelNote: "cancelNote",
    institutionIdType: "hci",
    institutionId: "institutionId"
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

**requestOptions:** `UpdatingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.updatingReferrals.<a href="/src/api/resources/updatingReferrals/client/Client.ts">backToDraft</a>(referralId, { ...params }) -> ReferralExchange.ReferralDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.updatingReferrals.backToDraft("referralId", {
    institutionIdType: "hci",
    institutionId: "institutionId"
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

**requestOptions:** `UpdatingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ReferralNotes
<details><summary><code>client.referralNotes.<a href="/src/api/resources/referralNotes/client/Client.ts">create</a>(referralId, { ...params }) -> ReferralExchange.NoteDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.referralNotes.create("referralId", {
    authorHciCode: "authorHciCode",
    institutionIdType: "hci",
    institutionId: "institutionId"
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

**requestOptions:** `ReferralNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CreatingReferrals
<details><summary><code>client.creatingReferrals.<a href="/src/api/resources/creatingReferrals/client/Client.ts">createUpsertLink</a>({ ...params }) -> ReferralExchange.ReferralUpsertLinkDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creatingReferrals.createUpsertLink({
    referrerInstitutionId: "referrerInstitutionId",
    referrerInstitutionIdType: "hci",
    referrerInstitutionName: "referrerInstitutionName",
    referrerId: "referrerId",
    requesterIdentifier: "requester@example.com",
    referrerIdType: "mcr",
    referrerName: "referrerName"
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

**requestOptions:** `CreatingReferralsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

